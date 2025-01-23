"use client";

import { deleteAllTodos } from "@/app/lib/todo/actions";

interface ClearTodosProps {
  show: boolean;
}

const ClearTodos = ({ show }: ClearTodosProps) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <button
        onClick={deleteAllTodos}
        className="tooltip tooltip-right"
        data-tip="Clear All"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ClearTodos;
