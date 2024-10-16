"use server";

import { product } from "../types";
import prisma from "@/db/prismaDb";

import {
  paginationHelper,
  prismaPaginationHelper,
} from "@/../types/helperList";
import { PrismaClient } from "@prisma/client";

const perPage = 5;

export async function getData(currentPage: number) {
  const prisma = new PrismaClient();
  const [recordsCount, result] = await prisma.$transaction([
    prisma.products.count({}),
    prisma.products.findMany({
      orderBy: { title: "asc" },
      include: {
        category_product: true,
        property: true,
        colors: true,
        model: true,
        productImage: true,
        tags: true,
        _count: true,
      },
      ...prismaPaginationHelper(currentPage, perPage),
    }),
  ]);
  return {
    meta: paginationHelper(recordsCount, currentPage, perPage),
    data: result as product[],
  };
}
