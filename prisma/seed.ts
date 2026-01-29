import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const lab = await prisma.lab.upsert({
    where: { slug: "gerak-lurus" },
    update: {},
    create: {
      slug: "gerak-lurus",
      title: "Lab Gerak Lurus",
      description: "Eksplorasi konsep gerak lurus beraturan dan berubah beraturan.",
      tags: ["kinematika", "SMA"],
      isPublished: true,
      simulations: {
        create: {
          slug: "gerak-lurus-01",
          title: "Simulasi Gerak Lurus",
          version: "1.0",
          difficulty: "Pemula",
          prerequisites: ["Vektor", "Satuan"],
          isPublished: true
        }
      }
    }
  });

  await prisma.auditLog.create({
    data: {
      actorUserId: null,
      action: "seed",
      entityType: "Lab",
      entityId: lab.id,
      meta: { note: "Seed initial lab and simulation" }
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
