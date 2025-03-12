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
	}
</style>
