<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'accent' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let border: boolean | undefined = false;
	export let rounded: 'sm' | 'md' | 'lg' = 'md';
	export let shadow: boolean | undefined = false;
	export let ghost: boolean | undefined = false;
	export let style: string | undefined = '';
</script>

<div
	class="badge"
	data-variant={variant}
	data-size={size}
	data-border={border}
	data-rounded={rounded}
	data-shadow={shadow}
	data-ghost={ghost}
	{style}
>
	<slot />
</div>

<style lang="scss">
	@import '../../style/variable';

	.badge {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 0;
		top: 0;

		&[data-variant='primary'] {
			color: $primary-text;
			background-color: $primary-main;
		}

		&[data-variant='secondary'] {
			color: $secondary-text;
			background-color: $secondary-main;
		}

		&[data-variant='accent'] {
			color: $accent-text;
			background-color: $accent-main;
		}

		&[data-size='sm'] {
			height: 4px;
			width: 4px;
			padding: 2px;
		}

		&[data-size='md'] {
			height: 10px;
			height: 10px;
		}

		&[data-size='lg'] {
			height: 20px;
			padding: 20px;
		}

		&[data-border='true'] {
			&[data-variant='primary'] {
				border: 1px solid $primary-border;
			}
			&[data-variant='secondary'] {
				border: 1px solid $secondary-border;
			}
			&[data-variant='accent'] {
				border: 1px solid $accent-border;
			}
		}

		&[data-rounded='sm'] {
			border-radius: $rounded-sm;
		}

		&[data-rounded='md'] {
			border-radius: $rounded-md;
		}
		&[data-rounded='lg'] {
			border-radius: $rounded-lg;
		}

		&[data-ghost='true'] {
			background: transparent;
		}

		&[data-shadow='true'] {
			box-shadow: $box-shadow;
		}
	}
</style>
