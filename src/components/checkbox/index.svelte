<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let border: boolean | undefined = false;
	export let rounded: 'sm' | 'md' | 'lg' = 'md';
	export let shadow: boolean | undefined = false;
	export let ghost: boolean | undefined = false;
	export let checked: boolean = false;
	export let disabled: boolean = false;
	export let onClick: ((event: MouseEvent) => void) | undefined = undefined;
	export let style: string = '';
</script>

<input
	type="checkbox"
	bind:checked
	on:click={onClick}
	data-size={size}
	data-border={border}
	data-rounded={rounded}
	data-shadow={shadow}
	data-ghost={ghost}
	{disabled}
	{style}
/>

<style lang="scss">
	@import '../../style/variable';

	input {
		accent-color: $secondary-main;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		&[data-size='sm'] {
			width: 16px;
			height: 16px;
		}

		&[data-size='md'] {
			width: 24px;
			height: 24px;
		}

		&[data-size='lg'] {
			width: 32px;
			height: 32px;
		}

		&[data-border='none'] {
			border: none;
		}

		&[data-ghost='true'] {
			background: transparent;
		}
	}
</style>
