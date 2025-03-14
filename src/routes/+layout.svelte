<script lang="ts">
	import { Sidebar } from '../components/sidebar';
	import { Header } from '../components/header';
</script>

<div class="root_layout">
	<Header />
	<div class="main_layout">
		<Sidebar />
		<main>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	@import '../style/variable';
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		color: $text-primary;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	:global(:root) {
		--sidebar-width: 400px;
		--header-height: 60px;
	}

	:global(.line-through) {
		text-decoration: line-through;
		color: gray;
	}

	.root_layout {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.main_layout {
		display: flex;
		width: 100%;
		height: 100%;
	}

	main {
		overflow: auto;
		flex: 1;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.05);
		padding: 60px 40px 40px 40px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
</style>
