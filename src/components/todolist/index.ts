export { default as TodoListItem } from './todolist-item.svelte';

export interface ITodo {
	text: string;
	id: string;
	done: boolean;
}
