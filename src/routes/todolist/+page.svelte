<script lang="ts">
  import { onMount } from 'svelte';
  import { Card } from '../../components/card';
  import { TodoListItem, type ITodo } from '../../components/todolist';
  import { Button } from '../../components/button';
  import { TextInput } from '../../components/text-Input';
  import { Title } from '../../components/title';

  let todos: ITodo[] = [];
  let search: string = '';
  let selectedTodos: string[] = [];

  $: result = todos.filter((todo) => todo.text.includes(search));
  $: buttonDisabled = selectedTodos.length === 0;

  const fetchTodo = () => {
    if (localStorage.getItem('todos')) {
      todos = JSON.parse(localStorage.getItem('todos') as string);
    }
  };

  const saveTodos = (newTodos: ITodo[]) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  onMount(() => {
    fetchTodo();
  });

  /* AddTodo 관련 함수 */

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(e);
      // const text = (e.target as HTMLInputElement).value;
      // console.log(text);
      // if (text) {
      // 	addTodo(new CustomEvent('addTodo', { detail: { text } }));
      // 	(e.target as HTMLInputElement).value = '';
      // }
    }
  };

  const addTodo = (e: Event) => {
    console.log(e);
    const newText = e.target.value;
    if (!newText) return;
    // const newTodo: ITodo = {
    // 	text: newText,
    // 	id: String(Date.now()),
    // 	done: false
    // };
    // const newTodos = [...todos, newTodo];

    // saveTodos(newTodos);
    // fetchTodo();
  };

  const deleteTodo = (e: Event) => {
    const ID = e.target.parentElement.id;
    const newTodos = todos.filter((todo) => todo.id !== ID);
    saveTodos(newTodos);
    fetchTodo();
  };

  const checkTodo = (e: Event) => {
    const ID = e.target.parentElement.id;
    const newTodos = todos.map((todo) =>
      todo.id === ID
        ? {
            ...todo,
            done: e.detail.checked
          }
        : todo
    );

    saveTodos(newTodos);
    fetchTodo();
  };

  const changeTodo = (e: Event) => {
    const ID = e.target.parentElement.id;
    const newText = e.target.value;

    const newTodos = todos.map((todo) =>
      todo.id === ID
        ? {
            ...todo,
            text: newText
          }
        : todo
    );

    saveTodos(newTodos);
    fetchTodo();
  };

  /* Filter 관련 함수 */

  const selectTodo = (e: CustomEvent) => {
    const ID = e.target.parentElement.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      selectedTodos = [...selectedTodos, ID];
    } else {
      selectedTodos = selectedTodos.filter((todo) => todo !== ID);
    }
  };

  const deleteSelectedTodos = () => {
    const newTodos = todos.filter((todo) => !selectedTodos.includes(todo.id));
    selectedTodos = [];
    saveTodos(newTodos);
    fetchTodo();
  };
</script>

<section>
  <Card>
    <div class="todolist_container">
      <Title text="TodoList" />
      <TextInput variant="primary" size="md" placeholder="Add Todo" />
      <ul class="main_todo_list">
        {#each todos as { id, done, text }}
          <TodoListItem
            {id}
            checked={done}
            {text}
            onCheck={checkTodo}
            onChange={addTodo}
            onDelete={deleteTodo}
          />
        {/each}
      </ul>
    </div>
  </Card>

  <Card>
    <div class="todolist_container">
      <Title text="TodoList Filter" />
      <div class="filter_todo_list_header">
        <TextInput variant="primary" size="md" placeholder="Filter Todo" />
        <Button
          disabled={buttonDisabled}
          onClick={deleteSelectedTodos}
          text={`선택된 항목 :  ${selectedTodos.length} 개 삭제`}
        />
      </div>
      <ul>
        {#each result as { id, done, text }}
          <li {id}>
            <TodoListItem
              {id}
              {text}
              onCheck={selectTodo}
              onChange={changeTodo}
              onDelete={deleteTodo}
            />
          </li>
        {/each}
      </ul>
    </div>
  </Card>
</section>

<style lang="scss">
  @import '../../style/mixin';
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 0;
      font-size: 16px;
    }

    .todolist_container {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .filter_todo_list_header {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
</style>
