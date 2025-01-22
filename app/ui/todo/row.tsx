import { type Todo } from "@/app/lib/models/todo";
import { updateTodo } from "@/app/lib/todo/actions";

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
    </tr>
  );
};

export default TodoRow;
