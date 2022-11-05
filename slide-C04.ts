import { PrismaClient, Prisma } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  model: {
    user: {
      signUp(this, data: SignUpData) {
        const ctx = Prisma.getExtensionContext(this)

        return ctx.create({ data })
      }
    }
  }
})

type SignUpData = {
  email: string,
  firstName: string, 
  lastName: string, 
  age: number
}

const user = await xprisma.user.signUp({
  age: 32,
  email: 'jane@prisma.io',
  firstName: 'Jane',
  lastName: 'Doe'
})
