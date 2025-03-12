<script lang="ts">
	export let variant: 'default' | 'secondary' | 'destructive' | 'outline' | undefined = 'default';
</script>

<div class={`badge ${variant}`}>
	<slot />
</div>

<style lang="scss">
	.badge {
		&.default {
			background-color: var(--skyblue);

			&:hover {
				background-color: var(--skyblue);
			}
		}

		&.outline {
			background-color: white;
			border: 1.5px solid rgba(0, 0, 0, 0.3);
			color: black;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}

		&.destructive {
			background-color: var(--error);
			color: white;

			&:hover {
				background-color: var(--error);
			}
		}
	}
</style>
