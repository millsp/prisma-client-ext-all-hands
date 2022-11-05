// @ts-nocheck
import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  query: {
    user: {
      $nestedOperations: {
        where({ args }) {
          return { age: { gt: 18 }, ...args }
        }
      }
    }
  }
})

await xprisma.user.findMany({})
await xprisma.user.findFirst({})
