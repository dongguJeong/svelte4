<script lang="ts">
	export let src: string = '';
	export let width: number;
	export let height: number;
	export let border: 'gray' | 'black' | 'none' = 'none';
</script>

<div
	class={`avatar ${border}`}
	style="
		width: {width}px;
		height: {height}px;
	"
>
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

		&.gray {
			border: 2px solid rgba(0, 0, 0, 0.3);
		}

		&.none {
			border: none;
		}

		&.black {
			border: 2px solid rgba(0, 0, 0);
		}
	}
</style>
