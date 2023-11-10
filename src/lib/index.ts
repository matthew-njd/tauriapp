import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allCBM = await prisma.CBM_Packing_Information.findMany();
  console.log(allCBM);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })