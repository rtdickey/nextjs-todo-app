"use server";

import { Todo } from "@/app/lib/models/todo";
import { revalidatePath } from "next/cache";

const todos: Todo[] = [
  { id: "1", task: "Buy milk", completed: false },
  { id: "2", task: "Buy eggs", completed: true },
];

export const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return todos;
};

export const updateTodo = async (todo: Todo) => {
  todo.completed = !todo.completed;
  console.log(`Updated todo: ${JSON.stringify(todo)}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
  revalidatePath("/");
};
