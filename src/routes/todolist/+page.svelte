<script lang="ts">
	import { onMount } from 'svelte';
	import { Card } from '../../components/card';
	import { TextField } from '../../components/textField';
	import ContentsTitle from '../../components/title/contents-title.svelte';
	import { TodoListItem, type ITodo } from '../../components/todolist';

	let todos: ITodo[] = [];
	let newTodo: string = '';

	const fetchTodo = () => {
		if (localStorage.getItem('todos')) {
			todos = JSON.parse(localStorage.getItem('todos') as string);
		}
	};

	onMount(() => {
		fetchTodo();
	});

	const addTodo = (e) => {
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
		console.log(e.target.parentElement.id);

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

	const saveTodos = (newTodos: ITodo[]) => {
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	const changeTodo = (e: Event) => {
		const ID = e.target.parentElement.parentElement.parentElement.id;

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

	const koreaDate = (date: string) => {
		const newDate = new Date(Number(date));
		const year = newDate.getFullYear();
		const month = newDate.getMonth() + 1;
		const day = newDate.getDate();
		const hour = newDate.getHours();
		const minute = newDate.getMinutes();

		return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
	};
</script>

<section>
	<Card>
		<ContentsTitle slot="card_header" title="TodoList" />
		<div slot="card_content">
			<TextField
				on:change={addTodo}
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

			.done {
				text-decoration: line-through;
				color: var(--gray);
			}
		}
	}

	@include small {
		.main_todo_list span {
			display: none;
		}
	}
</style>
