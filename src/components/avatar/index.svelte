<script lang="ts">
	export let src: string = '';
	export let border: 'border' | 'none' = 'none';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let style: string = '';
</script>

<div class={`avatar ${border} ${size}`} {style}>
	<img {src} alt="avatar" />
</div>

<style lang="scss">
	.avatar {
		border-radius: 50%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
		}

		&.border {
			border: 2px solid rgba(0, 0, 0, 0.3);
		}

		&.none {
			border: none;
		}

		&.small {
			width: 30px;
			height: 30px;
		}

		&.medium {
			width: 40px;
			height: 40px;
		}

		&.large {
			width: 50px;
			height: 50px;
		}
	}
</style>
