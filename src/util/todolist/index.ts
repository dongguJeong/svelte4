import type { ITodo } from '../../components/todolist';

export const fetchTodo = (todos: ITodo[]): ITodo[] => {
  if (localStorage.getItem('todos')) {
    return JSON.parse(localStorage.getItem('todos') as string);
  }
  return todos;
};

export const saveTodos = (newTodos: ITodo[]): void => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
};

/* AddTodo 관련 함수 */

export const addTodo = (e: Event, todos: ITodo[]): void => {
  const newText = e.target.elements[0].value;
  if (!newText) return;
  const newTodo: ITodo = {
    text: newText,
    id: String(Date.now()),
    done: false
  };
  const newTodos = [...todos, newTodo];

  saveTodos(newTodos);
  e.target.elements[0].value = '';
};

export const deleteTodo = (id: string, todos: ITodo[]): void => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(newTodos);
};

export const checkTodo = (id: string, todos: ITodo[]): void => {
  const newTodos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          done: !todo.done
        }
      : todo
  );

  saveTodos(newTodos);
};

export const changeTodo = (id: string, e: Event, todos: ITodo[]) => {
  const target = e.target as HTMLInputElement;
  const newText = target.value;

  const newTodos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          text: newText
        }
      : todo
  );

  saveTodos(newTodos);
};

/* Filter 관련 함수 */

export const selectTodo = (id: string, e: Event, selectedTodos: string[]): string[] => {
  const target = e.target as HTMLInputElement;
  const isChecked = target.checked;
  if (isChecked) {
    selectedTodos = [...selectedTodos, id];
  } else {
    selectedTodos = selectedTodos.filter((todo) => todo !== id);
  }
  return selectedTodos;
};

export const deleteSelectedTodos = (todos: ITodo[], selectedTodos: string[]): void => {
  const newTodos = todos.filter((todo) => !selectedTodos.includes(todo.id));
  saveTodos(newTodos);
};

export const onInput = (e: Event): string => {
  const target = e.target as HTMLInputElement;
  const search = target.value;
  return search;
};
