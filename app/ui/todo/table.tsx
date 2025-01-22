import { getTodos } from "@/app/lib/todo/actions";
import TodoRow from "./row";
import AddTodo from "./add";

const TodoTable = async () => {
  const todos = await getTodos();
  return (
    <>
      <div>
        <AddTodo />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th colSpan={3}>Honey-Do List</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoRow key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoTable;
