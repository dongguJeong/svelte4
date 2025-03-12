<script lang="ts">
	export let title: string;
</script>

<section class="page_title">
	<slot name="title_left" />
	<h1>{title}</h1>
</section>

<style lang="scss">
	.page_title {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;

		h1 {
			font-size: 18px;
			font-weight: 700;
			color: rgba(0, 0, 0, 0.7);
		}
	}
</style>
