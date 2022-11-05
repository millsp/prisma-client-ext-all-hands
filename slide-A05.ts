// @ts-nocheck
import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const rlsExtension = (roleName: string) => (client) => ({
  query: {
    $allModels: {
      $allOperations({ model, operation, args, data }) {
        return client.$transaction((tx) => {
          await tx.$executeRaw`SET ROLE ${roleName}`
          await data
        })
      }
    }
  }
})

app.get('/foo', (req) => {
  const xprisma = prisma.$extends(rlsExtension(req.session.role))

  const posts = await xprisma.posts.findMany()
})