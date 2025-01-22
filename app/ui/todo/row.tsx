import { Todo } from "@prisma/client";
import { deleteTodo, updateTodo } from "@/app/lib/todo/actions";

interface TodoRowProp {
  todo: Todo;
}

const TodoRow = ({ todo }: TodoRowProp) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={async () => {
            "use server";
            await updateTodo(todo.id);
          }}
        />
      </td>
      <td>{todo.task}</td>
      <td>
        <button
          className=""
          onClick={async () => {
            "use server";
            await deleteTodo(todo.id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default TodoRow;
