<script lang="ts">
	import { onMount } from 'svelte';
	import { Title } from '../../components/title';

	interface ITodo {
		text: string;
		id: string;
		done: boolean;
	}

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

	const handleSubmit = (e: Event) => {
		if (!newTodo) {
			return;
		}

		addTodo(newTodo);
		newTodo = '';
	};

	const addTodo = (text: string) => {
		const newTodo: ITodo = {
			text,
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

	const checkTodo = (e: Event) => {
		const ID = e.target.parentElement.id;
		console.log(ID);
		const newTodos = todos.map((todo) =>
			todo.id === ID
				? {
						...todo,
						done: !todo.done
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
		const ID = e.target.parentElement.id;
		console.log(ID);
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
	<div class="main_todo">
		<Title title="TodoList" />
		<form class="main_todo_form" on:submit|preventDefault={handleSubmit}>
			<input
				class="main_todo_input"
				type="text"
				placeholder="Please enter your ToDo List"
				bind:value={newTodo}
			/>
		</form>
		<ul class="main_todo_list">
			{#each todos as { id, done, text } (id)}
				<li class="main_todo_item" {id}>
					<input type="checkbox" on:click={checkTodo} bind:checked={done} />
					<input type="text" class:done bind:value={text} on:change={changeTodo} />
					<span class:done>{koreaDate(id)}</span>
					<button on:click={deleteTodo}>🗑️</button>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	@import '../../style/mixin';
	section {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		padding: 20px 20px;
		gap: 20px;
		min-height: 300px;
		max-width: 540px;
		overflow-y: auto;

		form {
			display: flex;
			gap: 10px;
			width: 100%;

			input {
				border: none;
				border-bottom: 1px solid rgba(0, 0, 0, 0.7);
				width: 100%;
				padding: 10px 10px;
				outline: none;
				font-size: 16px;
			}

			input:focus {
				box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
			}
		}

		ul {
			list-style: none;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding-left: 0;
			font-size: 16px;

			li {
				display: flex;
				align-items: center;
				position: relative;
				cursor: pointer;
				width: 100%;

				input[type='checkbox'] {
					height: 20px;
					width: 20px;
					box-shadow: var(--box-shadow);
					border-radius: 10px;
					margin-right: 20px;
				}

				input[type='text'] {
					width: 50%;
					font-size: 16px;
					padding: 4px 8px;
					border: none;
					border-bottom: 1px solid rgba(0, 0, 0, 0.3);
					outline: none;
					position: relative;
				}

				input[type='text']:focus {
					box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
				}

				span {
					font-size: 13px;
					color: var(--gray);
					position: absolute;
					bottom: 0;
					right: 50px;
				}

				button {
					cursor: pointer;
					margin-left: auto;
					border: none;
					background-color: transparent;
					border-radius: 5px;
					padding: 4px;
					text-decoration: none;
				}

				button:hover {
					background-color: rgba(0, 0, 0, 0.1);
				}
				&:hover div {
					visibility: visible;
				}
			}

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
