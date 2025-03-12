<script lang="ts">
	import { Input } from '../input';

	export let defaultValue: string = '';
	export let helperText: string = '';
	export let label: string = '';
	export let placeholder = '';
	export let type: string = '';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let size: 'large' | 'medium' | 'small' = 'large';
	export let mode: 'standard' | 'filled' | 'outlined' = 'standard';
	export let style: string = '';
</script>

<div class="text-field" {style}>
	{#if label}
		<p>{label}</p>
	{/if}
	<div class={mode}>
		<slot name="icon-start" />
		<Input {disabled} {required} {type} {placeholder} {size} on:change {mode} {defaultValue} />
		<slot name="icon-end" />
	</div>
	{#if helperText}
		<p>{helperText}</p>
	{/if}
</div>

<style lang="scss">
	.text-field {
		width: 100%;
		div {
			display: flex;
			align-items: center;
			padding: 0 10px;

			&.standard {
				border-bottom: 1px solid var(--gray);
				background-color: white;
			}

			&.filled {
				border: none;
				background-color: var(--gray);
			}

			&.outlined {
				background: white;
				border: 1.5px solid var(--ouline-border-gray);
				border-radius: 5px;

				&:focus-within {
					border: 1.5px solid var(--skyblue);
				}
			}
		}

		p {
			margin-top: 8px;
			font-size: 12px;
			color: var(--color);
		}
	}
</style>
