<script lang="ts">
	import HeaderTitle from './header-title.svelte';
	import HeaderInput from './header-input.svelte';
	import HeaderButtons from './header-buttons.svelte';
</script>

<header class="header">
	<HeaderTitle />
	<div class="header_right">
		<HeaderInput />
		<HeaderButtons />
	</div>
</header>

<style lang="scss">
	@import '../../style/mixin';
	.header {
		display: flex;
		align-items: center;
		background: #fff;
		width: 100%;
		padding-right: 40px;
		gap: 80px;
	}

	.header_right {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	@include medium {
		.header_title {
			width: auto;
		}
		.header {
			gap: 0;
			justify-content: space-between;
		}
	}
</style>
