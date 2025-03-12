<script lang="ts">
	export let src: string = '';
	export let width: number;
	export let height: number;
	export let border: 'gray' | undefined;
</script>

<div
	class="avatar"
	class:border
	style="
        --avatar-width: {width}px;
        --avatar-height: {height}px;
    "
>
	<img {src} alt="avatar" />
</div>

<style lang="scss">
	.avatar {
		width: var(--avatar-width);
		height: var(--avatar-height);
		border-radius: 50%;

		img {
			width: 100%;
			height: 100%;
		}

		.gray {
			border: 2px solid rgba(0, 0, 0, 0.3);
		}
	}
</style>
