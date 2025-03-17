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
    fetchTodo,
    onInput,
    selectTodo
  } from '../../util/todolist';
  import { debounce } from '../../util/todolist/debounce';

  let todos: ITodo[] = [];
  let search: string = '';
  let selectedTodos: string[] = [];

  $: result = todos.filter((todo) => todo.text.includes(search));
  $: buttonDisabled = selectedTodos.length === 0;

  onMount(() => {
    todos = fetchTodo(todos);
  });

  /* AddTodo 관련 함수 */

  const handleAddTodo = (e: Event) => {
    addTodo(e, todos);
    todos = fetchTodo(todos);
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id, todos);
    todos = fetchTodo(todos);
  };

  const handleCheckTodo = (id: string) => {
    checkTodo(id, todos);
    todos = fetchTodo(todos);
  };

  const handleChangeTodo = (id: string, e: Event) => {
    changeTodo(id, e, todos);
    todos = fetchTodo(todos);
  };

  /* Filter 관련 함수 */

  const handleSelectTodo = (id: string, e: Event) => {
    selectedTodos = selectTodo(id, e, selectedTodos);
  };

  const handleDeleteSelectedTodos = () => {
    deleteSelectedTodos(todos, selectedTodos);
    selectedTodos = [];
    todos = fetchTodo(todos);
  };

  const handleOnInput = (e: Event) => {
    debounce(() => {
      search = onInput(e);
    }, 200);
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
        {#each result as { id, text }}
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
