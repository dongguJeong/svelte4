<script lang="ts">
	export let variant: 'default' | 'secondary' | 'red' | 'outlined' = 'default';
	export let style: string = '';
</script>

<div
	class={`badge ${variant}`}
	style="
		{style}
	"
>
	<slot />
</div>

<style lang="scss">
	.badge {
		position: absolute;
		border-radius: 50%;
		width: 4px;
		height: 4px;
		right: 0;
		top: 0;

		&.default {
			background-color: var(--skyblue);

			&:hover {
				background-color: var(--skyblue);
			}
		}

		&.outlined {
			background-color: white;
			border: 1.5px solid rgba(0, 0, 0, 0.3);
			color: black;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}

		&.red {
			background-color: var(--error);
			color: white;

			&:hover {
				background-color: var(--error);
			}
		}
	}
</style>
