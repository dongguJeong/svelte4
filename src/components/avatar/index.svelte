<script lang="ts">
	export let src: string = '';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let rounded: 'none' | 'sm' | 'md' | 'lg' = 'md';
	export let border: boolean | undefined = false;
	export let shadow: boolean | undefined = false;
	export let style: string = '';
</script>

<img
	class="avatar"
	{src}
	data-size={size}
	data-rounded={rounded}
	data-border={border}
	data-shadow={shadow}
	{style}
	alt="avatar"
/>

<style lang="scss">
	@import '../../style/mixin';
	@import '../../style/variable';

	.avatar {
		object-fit: cover;

		&[data-size='sm'] {
			width: 24px;
			height: 24px;
		}

		&[data-size='md'] {
			width: 32px;
			height: 32px;
		}

		&[data-size='sm'] {
			width: 40px;
			height: 40px;
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

		&[data-border='true'] {
			border: 1.5px solid rgba(0, 0, 0, 0.4);
		}

		&[data-shadow='true'] {
			box-shadow: $box-shadow;
		}
	}
</style>
