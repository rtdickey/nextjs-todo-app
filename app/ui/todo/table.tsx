import { getTodos } from "@/app/lib/todo/actions";
import TodoRow from "./row";

const TodoTable = async () => {
  const todos = await getTodos();
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={2}>Honey-Do List</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
