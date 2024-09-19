import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// fetch temperatures from the last minute
export async function getTemperatures() {
  const oneMinuteAgo = new Date(Date.now() - 60000)
  return await prisma.temperature.findMany({
    where: {
      createdAt: {
        gte: oneMinuteAgo, // createdAt >= oneMinuteAgo
      },
    },
    orderBy: {
      createdAt: 'asc', //sort by createdAt in ascending order
    },
  })
}
