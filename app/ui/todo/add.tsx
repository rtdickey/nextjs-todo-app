"use client";

import { addTodo } from "@/app/lib/todo/actions";
//import { PlusIcon } '@heroicons/react/24/outline'

import { ChangeEventHandler, useState } from "react";

const AddTodo = () => {
  const [task, setTask] = useState<string>("");

  return (
    <form
      action={addTodo}
      className="relative flex flex-1 flex-shrink-0 gap-x-4"
    >
      <label htmlFor="add-todo" className="sr-only">
        Add Todo
      </label>
      <input
        id="task"
        name="task"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-500 placeholder:text-gray-300"
        placeholder="Add New Task"
      />
      <button type="submit">Add</button>
      {/* <PlusIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
    </form>
  );
};

export default AddTodo;
