import type { ITodo } from '../../components/todolist';

/* AddTodo 관련 함수 */

export const addTodo = (text: string, todos: ITodo[]): ITodo[] => {
  if (!text) return todos;
  const newTodo: ITodo = {
    text,
    id: String(Date.now()),
    done: false
  };

  const newTodos = [...todos, newTodo];
  return newTodos;
};

export const deleteTodo = (id: string, todos: ITodo[]): ITodo[] => {
  return todos.filter((todo) => todo.id !== id);
};

export const checkTodo = (id: string, todos: ITodo[]): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          done: !todo.done
        }
      : todo
  );
};

export const changeTodo = (id: string, text: string, todos: ITodo[]): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          text
        }
      : todo
  );
};

/* Filter 관련 함수 */

export const selectTodo = (id: string, isChecked: boolean, selectedTodos: string[]): string[] => {
  if (isChecked) {
    return (selectedTodos = [...selectedTodos, id]);
  } else {
    return (selectedTodos = selectedTodos.filter((todo) => todo !== id));
  }
};

export const deleteSelectedTodos = (todos: ITodo[], selectedTodos: string[]): ITodo[] => {
  return todos.filter((todo) => !selectedTodos.includes(todo.id));
};
