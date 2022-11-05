import { PrismaClient, Prisma } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  model: {
    user: {
      signUp(data: SignUpData) {
        const ctx = Prisma.getExtensionContext(this)

        return ctx.create({ data })
      }
    }
  }
})
