<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ITextInput, TextInputSize, TextInputType, TextInputVariant } from '.';

	export let placeholder: string;
	export let variant: TextInputVariant = 'standard';
	export let size: TextInputSize = 'medium';
	export let sx: string | undefined = undefined;
	export let type: TextInputType = 'text';

	const TextInputSizes: ITextInput['size'] = {
		large: {
			fontSize: '1.5rem',
			padding: '1rem 2rem'
		},
		medium: {
			fontSize: '1rem',
			padding: '0.5rem 1rem'
		},
		small: {
			fontSize: '0.75rem',
			padding: '0.25rem 0.5rem'
		}
	};

	const dispatch = createEventDispatcher();

	function handleChange(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		dispatch('change', event);
	}

	function handleSubmit(e: SubmitEvent) {
		dispatch('submit', e);
	}
</script>

<div>
	<form on:submit={handleSubmit}>
		<slot name="left-icon" />
		<input {type} {placeholder} class="input" class:variant class:size on:input={handleChange} />
	</form>
</div>

<style lang="scss">
	.input {
		width: 100%;
		height: 100%;
	}
</style>
