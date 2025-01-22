"use server";

import { Todo } from "@/app/lib/models/todo";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

export const getTodos = async () => {
  const prisma = new PrismaClient();
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { completed: "asc" },
    });
    return todos;
  } catch (error) {
    throw error;
  } finally {
    prisma.$disconnect();
  }
};

export const updateTodo = async (todoId: string) => {
  const prisma = new PrismaClient();
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: todoId },
    });

    if (!todo) {
      throw new Error("Todo not found");
    }

    await prisma.todo.update({
      where: { id: todoId },
      data: { completed: !todo.completed },
    });

    revalidatePath("/");
  } catch (error) {
    throw error;
  } finally {
    prisma.$disconnect();
  }
};
