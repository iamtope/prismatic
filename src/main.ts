import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = {
    name: "Abass Adamo",
    email: "abass@andrew.cmu.edu",
    songs: {
      create: {
        title: "I Know Who I Am",
      },
    },
  };
  const newArtist = await prisma.artist.create({
      data
  })
  console.log(newArtist);

  const allArtists = await prisma.artist.findMany({include: { songs: true }})
  console.log('All Artists : ', allArtists);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
