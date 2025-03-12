<script lang="ts">
	export let title: string;
</script>

<section class="contents_title">
	<slot name="title_left" />
	<h2>{title}</h2>
</section>

<style lang="scss">
	.contents_title {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;

		h2 {
			font-size: 18px;
			font-weight: 700;
			color: rgba(0, 0, 0, 0.7);
		}
	}
</style>
