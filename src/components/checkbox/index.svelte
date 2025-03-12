<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let defaultValue: boolean = false;
	export let disabled: boolean = false;
	export let color: string = 'white';
	export let backgroundColor: string = 'black';
	export let height: number = 20;
	export let width: number = 20;
	export let style: string = '';

	const dispatch = createEventDispatcher();

	const handleClick = (e: MouseEvent) => {
		const target = e.target as HTMLInputElement;
		console.log(target.checked);
		dispatch('change', { checked: target.checked });
	};

	let checked = defaultValue;
</script>

<input
	type="checkbox"
	bind:checked
	on:click={handleClick}
	{disabled}
	style="
        color: {color};
        background-color: {backgroundColor};
		width : {width}px;
		height : {height}px;
		{style}
    "
/>

<style lang="scss">
	input {
		border-radius: var(--border-radius);
		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
</style>
