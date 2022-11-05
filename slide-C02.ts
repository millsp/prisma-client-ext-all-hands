import { PrismaClient } from '../prisma/client'

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
  model: {
    
  }
})