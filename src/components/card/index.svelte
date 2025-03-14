<script lang="ts">
	export let rounded: 'sm' | 'md' | 'lg' | undefined = 'md';
	export let shadow: boolean | undefined = false;
	export let ghost: boolean | undefined = false;
	export let padding: 'sm' | 'md' | 'lg' | undefined = 'lg';
	export let style: string | undefined = '';
	export let full: boolean | undefined = false;
</script>

<div
	class="card"
	data-full={full}
	data-rounded={rounded}
	data-padding={padding}
	data-shadow={shadow}
	data-ghost={ghost}
	{style}
>
	<slot />
</div>

<style lang="scss">
	@import '../../style/mixin';
	@import '../../style/variable';
	.card {
		background-color: white;

		&[data-rounded='sm'] {
			border-radius: $rounded-sm;
		}

		&[data-rounded='md'] {
			border-radius: $rounded-md;
		}
		&[data-rounded='lg'] {
			border-radius: $rounded-lg;
		}

		&[data-shadow='true'] {
			box-shadow: $box-shadow;
		}

		&[data-ghost='true'] {
			background: transparent;
		}

		&[data-padding='sm'] {
			padding: $padding-sm;
		}

		&[data-padding='md'] {
			padding: $padding-md;
		}
		&[data-padding='lg'] {
			padding: $padding-lg;
		}

		&[data-full='true'] {
			width: 100%;
		}
	}
</style>
