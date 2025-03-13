<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let checked: boolean = false;
	export let disabled: boolean = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let style: string = '';

	const dispatch = createEventDispatcher();

	const handleClick = (e: MouseEvent) => {
		const target = e.target as HTMLInputElement;
		dispatch('click', { checked: target.checked, event: e });
	};
</script>

<input
	type="checkbox"
	bind:checked
	on:click={handleClick}
	{disabled}
	class={size}
	style="
        {style}
    "
/>

<style lang="scss">
	input {
		border-radius: 20px;
		accent-color: rgb(34, 139, 34);

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&.small {
			width: 16px;
			height: 16px;
		}

		&.medium {
			width: 24px;
			height: 24px;
		}

		&.large {
			width: 32px;
			height: 32px;
		}
	}
</style>
