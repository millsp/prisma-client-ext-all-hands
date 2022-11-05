import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  client: {
    begin() {
      return {} as any
    }
  }
})

const tx = await xprisma.$begin()

const user = await tx.user.create({ data: { name: 'Alice' } })
const post = await tx.post.create({ data: { title: 'Hello World', author: { connect: { id: user.id } } } })

await tx.$rollback()
