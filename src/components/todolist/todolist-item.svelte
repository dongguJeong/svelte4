<script lang="ts">
	import { Button } from '../button';
	import { Checkbox } from '../checkbox';
	import { TextField } from '../textField';

	export let checked: boolean = false;
	export let text: string = '';
	export let onCheck: (e: Event) => void;
	export let onChange: (e: Event) => void;
	export let onDelete: (e: Event) => void;
	export let id = '';

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

<li {id}>
	<Checkbox on:change={onCheck} defaultValue={checked} width={25} height={25} />
	<TextField
		defaultValue={text}
		on:change={onChange}
		placeholder="Add Todo"
		size="medium"
		type="text"
		mode="outlined"
	/>
	<span class:checked>{koreaDate(id)}</span>
	<Button onClick={onDelete} variant="ghost">🗑️</Button>
</li>

<style lang="scss">
	li {
		display: flex;
		align-items: center;
		position: relative;
		cursor: pointer;
		width: 100%;
		gap: 10px;

		span {
			font-size: 12px;
			color: var(--gray);

			&.checked {
				text-decoration: line-through;
			}
		}
	}
</style>
