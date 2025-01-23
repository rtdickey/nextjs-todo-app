"use client";

import { addTodo } from "@/app/lib/todo/actions";
import { PlusIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

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
      <div className="join">
        <input
          id="task"
          name="task"
          className="join-item peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-200 placeholder:text-gray-500"
          placeholder="Add New Task"
        />
        <button
          type="submit"
          className="join-item bg-gray-100 rounded-md p-2 tooltip tooltip-right"
          data-tip="Add Task"
        >
          <PlusIcon className="h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
