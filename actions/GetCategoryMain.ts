import prisma from "@/db/prismaDb";

export default async function getCategoryMain() {
  try {
    const category = await prisma.categoryItem.findMany({
      where: {
        parent: "catgorymain",
      },
    });
    console.log(category);

    if (category) return category;
  } catch (error: any) {
    throw new Error(error);
  }
}
