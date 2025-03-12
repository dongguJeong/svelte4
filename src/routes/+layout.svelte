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
		--ouline-border-gray: rgba(0, 0, 0, 0.1);
		--skyblue: #56b5d3;
		--secondary: #f6f6f7;
		--error: #e0403e;
		--sidebar-width: 400px;
		--header-height: 60px;
		--skyblue-gradient: linear-gradient(#3acafb 0%, #56b5d3 100%);
		--blue-gradient: linear-gradient(to right, #69a3ea 0%, #676fe1 100%);
		--purple-gradient: linear-gradient(to right, #c194fa 0%, #b67af6 100%);
		--orange-gradient: linear-gradient(to right, #fdb686 0%, #ff9a8d 100%);
		--box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
		--text-lg: 20px;
		--text-md: 16px;
		--text-sm: 14px;
		--border-md: 10px;
		--border-sm: 4px;

		--filter-white: invert(100%) sepia(9%) saturate(7472%) hue-rotate(184deg) brightness(109%)
			contrast(110%);
		--filter-gray: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%)
			contrast(84%);
		--filter-skyblue: invert(65%) sepia(86%) saturate(259%) hue-rotate(150deg) brightness(83%)
			contrast(98%);
	}

	:global(.status) {
		color: white;
		font-weight: 500;
		padding: 4px;
		border-radius: 4px;
	}

	:global(.purple_gradient) {
		background: var(--purple-gradient);
	}

	:global(.blue_gradient) {
		background: var(--blue-gradient);
	}

	:global(.orange_gradient) {
		background: var(--orange-gradient);
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
