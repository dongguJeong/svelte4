<script lang="ts">
	import SidebarNav from './sidebar-nav.svelte';
	import SidebarProfile from './sidebar-profile.svelte';
	import SidebarButton from './sidebar-button.svelte';
	import { open } from '../../store/sidebar-store';

	const isOpen = open;
</script>

<aside class="sidebar" class:open={$isOpen}>
	<SidebarProfile />
	<SidebarNav />
	<SidebarButton title="Add Project" />
</aside>

<style lang="scss">
	@import '../../style/mixin';
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background: white;
		padding: 60px 40px;
		width: var(--sidebar-width);
		height: 100%;
	}

	@include medium {
		.sidebar {
			z-index: 1000;
			position: fixed;
			top: 0;
			left: -400px;
			box-shadow: var(--box-shadow);
			width: var(--sidebar-width);
			transition: left 0.3s ease;
		}

		.open {
			left: 0px !important;
		}
	}
</style>
