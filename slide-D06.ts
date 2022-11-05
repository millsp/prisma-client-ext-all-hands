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
        fullName: { firstName: true, lastName: true }
      }
    }
  }
})

const data = await xprisma.user.findMany({
  select: {
    links: {
      select: {
        user: {
          select: {
            fullName: true
          }
        }
      }
    }
  }
})

const fullName = data[0]?.links[0]?.user?.fullName