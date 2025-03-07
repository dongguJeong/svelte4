<script lang="ts">
	import type { ICard } from '.';
	import DashboardCard from './dashboard-card.svelte';

	const cards: ICard[] = [
		{
			title: 'Stock Total',
			icon: '/svg/chart.svg',
			number: 150000,
			increased: 60,
			bg_gradient: 'purple_gradient'
		},
		{
			title: 'Total Profit',
			icon: '/svg/database.svg',
			number: 25000,
			increased: 30,
			bg_gradient: 'blue_gradient'
		},
		{
			title: 'Unique Visitors',
			icon: '/svg/flag.svg',
			number: 25000,
			increased: 80,
			bg_gradient: 'orange_gradient'
		}
	];
</script>

<section>
	{#each cards as card}
		<DashboardCard
			title={card.title}
			icon={card.icon}
			number={card.number}
			increased={card.increased}
			bg_gradient={card.bg_gradient}
		/>
	{/each}
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}
</style>
