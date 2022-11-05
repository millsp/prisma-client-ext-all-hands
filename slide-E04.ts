//@ts-nocheck
import { Prisma } from '../prisma/client'

const prisma = new PrismaClient()

const myExtension = Prisma.createExtension({
  model: {
    $allModels: {
      getClass<T>(this: T): new () => T {
        return class {} as any
      }
    }
  }
})

const xprisma = prisma.$extends(myExtension)