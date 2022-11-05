import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  query: {
    user: {
      findMany({ args, data }) {
        args.where = { age: { gt: 18 }, ...args.where }

        return data
      }
    }
  }
})

await xprisma.user.findMany({ })
