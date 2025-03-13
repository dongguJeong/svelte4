<script lang="ts">
	import { onMount } from 'svelte';
	import { Card } from '../../components/card';
	import { TextField } from '../../components/textField';
	import ContentsTitle from '../../components/title/contents-title.svelte';
	import { TodoListItem, type ITodo } from '../../components/todolist';
	import { Button } from '../../components/button';

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

	const addTodo = (e: CustomEvent) => {
		const newText = String(e.detail.text);
		const newTodo: ITodo = {
			text: newText,
			id: String(Date.now()),
			done: false
		};
		const newTodos = [...todos, newTodo];

		saveTodos(newTodos);
		fetchTodo();
	};

	const deleteTodo = (e: Event) => {
		const ID = e.target.parentElement.id;
		const newTodos = todos.filter((todo) => todo.id !== ID);
		saveTodos(newTodos);
		fetchTodo();
	};

	const checkTodo = (e: CustomEvent) => {
		const ID = e.detail.event.target.parentElement.id;
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

	const changeTodo = (e: CustomEvent) => {
		const ID = e.detail.event.target.parentElement.parentElement.parentElement.id;
		const newText = e.detail.text;

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
		const ID = e.detail.event.target.parentElement.id;
		const isChecked = e.detail.checked;

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
		<ContentsTitle slot="card_header" title="TodoList" />
		<div slot="card_content">
			<TextField
				on:enter={addTodo}
				placeholder="Add Todo"
				size="medium"
				type="text"
				mode="outlined"
			/>
			<ul class="main_todo_list">
				{#each todos as { id, done, text }}
					<TodoListItem
						{id}
						checked={done}
						{text}
						onCheck={checkTodo}
						onChange={changeTodo}
						onDelete={deleteTodo}
					/>
				{/each}
			</ul>
		</div>
	</Card>

	<Card>
		<ContentsTitle slot="card_header" title="TodoList Filter" />
		<div slot="card_content">
			<div class="filter_todo_list_header">
				<TextField bind:value={search} mode="outlined" size="medium" placeholder="find Todo" />

				<Button disabled={buttonDisabled} onClick={deleteSelectedTodos}
					>선택된 항목 : {selectedTodos.length} 개 삭제</Button
				>
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
	}

	.filter_todo_list_header {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
