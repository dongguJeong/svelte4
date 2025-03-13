<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'error' | 'outline' | 'ghost' | undefined =
		'primary';
	export let disabled: boolean | undefined = false;
	export let size: 'small' | 'medium' | 'large' | undefined = 'medium';
	export let style: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';

	export let onClick: ((event: MouseEvent) => void) | undefined = undefined;
</script>

<button on:click={onClick} {type} {disabled} class={`${size} ${variant}`} {style}>
	<slot />
</button>

<style lang="scss">
	button {
		border: 0;
		outline: none;
		position: relative;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		cursor: pointer;
		border-radius: var(--border-md);

		&.large {
			padding: 1rem 2rem;
			font-size: 1.5rem;
		}

		&.medium {
			padding: 0.5rem 1rem;
			font-size: 1rem;
		}

		&.small {
			padding: 0.25rem 0.75rem;
			font-size: 0.75rem;
		}

		&.primary {
			background-color: var(--skyblue);
			color: white;
			&:hover {
				background-color: var(--skyblue);
			}
		}

		&.secondary {
			background-color: var(--secondary);
			color: black;
		}

		&.outline {
			background-color: white;
			border: 1px solid rgba(0, 0, 0, 0.3);
			color: black;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}

		&.ghost {
			background-color: transparent;
			color: black;

			&:hover {
				background-color: var(--secondary-light);
			}
		}

		&.link {
			border: none;
			background-color: white;

			&:hover {
				text-decoration: underline;
			}
		}

		&.error {
			background-color: var(--error);
			color: white;

			&:hover {
				background-color: var(--error);
			}
		}

		&:disabled {
			color: white;
			background-color: rgba(0, 0, 0, 0.2);
			cursor: not-allowed;

			&:hover {
				background-color: rgba(0, 0, 0, 0.2);
			}
		}
	}
</style>
