import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  client: {
    begin() {
      return {} as any
    }
  }
})

xprisma.$begin()