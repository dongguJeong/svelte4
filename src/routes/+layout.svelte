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
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	:global(:root) {
		--gray: #6a7686;
		--skyblue: #56b5d3;
		--sidebar-width: 400px;
		--header-height: 60px;
		--skyblue-gradient: linear-gradient(#3acafb 0%, #56b5d3 100%);
		--blue-gradient: linear-gradient(to right, #69a3ea 0%, #676fe1 100%);
		--purple-gradient: linear-gradient(to right, #c194fa 0%, #b67af6 100%);
		--orange-gradient: linear-gradient(to right, #fdb686 0%, #ff9a8d 100%);
		--box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
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
