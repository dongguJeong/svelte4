<script lang="ts">
	import { Title } from '../components/title';
	import { Table } from '../components/table';
	import { Card } from '../components/card';

	interface ICard {
		title: string;
		icon: string;
		number: number;
		increased: number;
		bg_gradient: string;
	}

	const cards: ICard[] = [
		{
			title: 'Stock Total',
			icon: '/svg/chart.svg',
			number: 150000,
			increased: 60,
			bg_gradient: 'linear-gradient(to right, #69a3ea 0%, #676fe1 100%)'
		},
		{
			title: 'Total Profit',
			icon: '/svg/database.svg',
			number: 25000,
			increased: 30,
			bg_gradient: 'linear-gradient(to right, #c194fa 0%, #b67af6 100%)'
		},
		{
			title: 'Unique Visitors',
			icon: '/svg/flag.svg',
			number: 25000,
			increased: 80,
			bg_gradient: 'linear-gradient(to right, #fdb686 0%, #ff9a8d 100%)'
		}
	];
</script>

<Title title="Dashboard">
	<img slot="title_left" alt="speed-meter" src="/svg/speed-meter.svg" class="title_left_img" />
</Title>

<section class="dashboard_list">
	{#each cards as { bg_gradient, title, number, increased, icon }}
		<Card background={bg_gradient} gap={30}>
			<img slot="card_header" src={icon} alt="chart" class="main_card_icon" />

			<div slot="card_content" class="main_card_content">
				<div>
					<div class="main_card_title">{title}</div>
					<div class="main_card_number">${number}</div>
				</div>
			</div>
			<div slot="card_footer" class="main_card_increased">
				Increased by {increased}%
			</div>
		</Card>
	{/each}
</section>

<Table />

<style lang="scss">
	.title_left_img {
		width: 40px;
		height: 40px;
		padding: 5px;
		border-radius: 5px;
		background: var(--skyblue-gradient);
	}

	.dashboard_list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
		color: white;

		.main_card_icon {
			width: 30px;
			height: 30px;
			filter: var(--filter-white);
		}

		.main_card_content {
			display: flex;
			flex-direction: column;
			font-size: larger;
			font-weight: 600;
		}

		.main_card_increased {
			font-size: large;
		}
	}

	.pending {
		background: linear-gradient(#c194fa 0%, #b67af6 100%);
	}

	.approved {
		background: linear-gradient(#69a3ea 0%, #676fe1 100%);
	}

	.reject {
		background: linear-gradient(#fdb686 0%, #ff9a8d 100%);
	}
</style>
