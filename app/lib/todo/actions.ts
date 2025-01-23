"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

export const getTodos = async () => {
  const prisma = new PrismaClient();
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { date_completed: "desc" },
    });
    return todos;
  } catch (error) {
    throw error;
  } finally {
    prisma.$disconnect();
  }
};

export const addTodo = async (formData: FormData) => {
  const task = formData.get("task") as string;
  console.log("i know you should be server...");
  const prisma = new PrismaClient();
  try {
    await prisma.todo.create({
      data: {
        task: task,
        completed: false,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    prisma.$disconnect;
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
      data: {
        completed: !todo.completed,
        date_completed: !todo.completed ? new Date() : null,
      },
    });

    revalidatePath("/");
  } catch (error) {
    throw error;
  } finally {
    prisma.$disconnect();
  }
};

export const deleteTodo = async (todoId: string) => {
  const prisma = new PrismaClient();
  try {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    prisma.$disconnect;
  }
};

export const deleteAllTodos = async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.todo.deleteMany();
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    prisma.$disconnect();
  }
};
