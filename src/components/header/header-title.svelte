<script lang="ts">
	export let style: string = '';
	export let title;
</script>

<div class="header_title" {style}>
	<h1>{title}</h1>
</div>

<style lang="scss">
	@import '../../style/variable';
	.header_title {
		width: 360px;
		display: flex;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 1.5rem;
			color: $primary-main;
			font-weight: 800;
		}
	}
</style>
