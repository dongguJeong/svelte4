<script lang="ts">
  import { onMount } from 'svelte';
  import { Card } from '../../components/card';
  import { TodoListItem, type ITodo } from '../../components/todolist';
  import { Button } from '../../components/button';
  import { TextInput } from '../../components/text-Input';
  import { Title } from '../../components/title';
  import { SearchBar } from '../../components/searchbar';
  import {
    addTodo,
    changeTodo,
    checkTodo,
    deleteSelectedTodos,
    deleteTodo,
    selectTodo
  } from '../../util/todolist';
  import { debounce } from '../../util/debounce';

  let todos: ITodo[] = [];
  let search: string = '';
  let selectedTodos: string[] = [];

  $: result = todos.filter((todo) => todo.text.includes(search));
  $: buttonDisabled = selectedTodos.length === 0;

  onMount(() => {
    todos = fetchTodo(todos);
  });

  const fetchTodo = (): ITodo[] => {
    if (localStorage.getItem('todos')) {
      return JSON.parse(localStorage.getItem('todos') as string);
    }
    return todos;
  };

  const saveTodos = (newTodos: ITodo[]): void => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  /* AddTodo 관련 함수 */

  const handleAddTodo = (e: Event) => {
    const newText = e.target.elements[0].value;
    saveTodos(addTodo(newText, todos));
    e.target.elements[0].value = '';
    todos = fetchTodo();
  };

  const handleDeleteTodo = (id: string) => {
    saveTodos(deleteTodo(id, todos));
    todos = fetchTodo();
  };

  const handleCheckTodo = (id: string) => {
    saveTodos(checkTodo(id, todos));
    todos = fetchTodo();
  };

  const handleChangeTodo = (id: string, e: Event) => {
    const target = e.target as HTMLInputElement;
    const newText = target.value;
    saveTodos(changeTodo(id, newText, todos));
    todos = fetchTodo();
  };

  /* Filter 관련 함수 */

  const handleSelectTodo = (id: string, e: Event) => {
    const target = e.target as HTMLInputElement;
    const isChecked = target.checked;
    selectedTodos = selectTodo(id, isChecked, selectedTodos);
  };

  const handleDeleteSelectedTodos = () => {
    saveTodos(deleteSelectedTodos(todos, selectedTodos));
    selectedTodos = [];
    todos = fetchTodo();
  };

  const handleOnInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    search = target.value;
  };
</script>

<section>
  <Card>
    <div class="todolist_container">
      <Title text="TodoList" />
      <SearchBar full={true} placeholder="Add Todo" onSubmit={handleAddTodo} />

      <ul class="main_todo_list">
        {#each todos as { id, done, text }}
          <TodoListItem
            {id}
            checked={done}
            {text}
            onCheck={() => handleCheckTodo(id)}
            onDelete={() => handleDeleteTodo(id)}
            onChange={(e) => handleChangeTodo(id, e)}
            subText="완료"
          />
        {/each}
      </ul>
    </div>
  </Card>

  <Card>
    <div class="todolist_container">
      <Title text="TodoList Filter" />
      <div class="filter_todo_list_header">
        <TextInput variant="primary" size="md" placeholder="Filter Todo" onInput={handleOnInput} />
        <Button
          disabled={buttonDisabled}
          onClick={handleDeleteSelectedTodos}
          text={`선택된 항목 :  ${selectedTodos.length} 개 삭제`}
        />
      </div>
      <ul>
        {#each result as { id, text } (id)}
          <TodoListItem {id} {text} onCheck={(e) => handleSelectTodo(id, e)} />
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

  @include screen-md {
    section {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
