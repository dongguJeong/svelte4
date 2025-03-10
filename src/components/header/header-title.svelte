<div class="header_title">
	<h1>blueBox</h1>
</div>

<style lang="scss">
	@import '../../style/mixin';
	.header_title {
		width: 360px;
		display: flex;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 1.5rem;
			color: var(--skyblue);
			font-weight: 800;
		}
	}

	@include medium {
		.header_title {
			width: 200px;
		}
	}
</style>
