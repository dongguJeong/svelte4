<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let defaultValue: string = '';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let disabled: boolean = true;
	export let required: boolean = false;
	export let size: 'large' | 'medium' | 'small' = 'medium';
	export let mode: 'standard' | 'filled' | 'outlined' = 'standard';
	export const dispatch = createEventDispatcher();

	let value = defaultValue;
	let inputElement: HTMLInputElement;

	onMount(() => {
		if (inputElement) {
			inputElement.type = type;
		}
	});

	const handleChange = (e: any) => {
		if (e.target.value === '') {
			return;
		}
		dispatch('change', {
			text: e.target.value
		});
		value = '';
	};
</script>

<input
	bind:value
	bind:this={inputElement}
	{disabled}
	{required}
	{placeholder}
	class={`${size} ${mode}`}
	on:change={handleChange}
/>

<style lang="scss">
	input {
		outline: none;
		height: 100%;
		width: 100%;
		border: none;
		background-color: inherit;

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&.large {
			padding: 10px;
			font-size: 20px;
		}

		&.medium {
			padding: 8px;
			font-size: 16px;
		}

		&.small {
			padding: 4px;
			font-size: 14px;
		}

		&.filled {
			color: white;

			&::placeholder {
				color: white;
			}
		}
	}
</style>
