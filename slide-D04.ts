import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  result: {
    user: {
      fields: {
        fullName(user) {
          return `${user.firstName} ${user.lastName}`
        }
      },
      needs: {
        fullName: { firstName: true,/*lastName: true*/}
      }
    }
  }
})