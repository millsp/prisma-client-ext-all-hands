import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  model: {
    $allModels: {
      getClass<T>(this: T): new () => T {
        return class {} as any
      }
    }
  }
})

class UserService extends xprisma.user.getClass() {
  async method() {
    const user = await this.findFirst({})
  }
}
