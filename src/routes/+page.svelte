<script lang="ts">
	import { ContentsTitle, PageTitle } from '../components/title';
	import { Card } from '../components/card';
	import { Table } from '../components/table';

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

	const users = [
		{
			name: '카리나',
			email: 'aespa@stamper.network',
			role: 'Admin',
			date: '25 Apr, 2025',
			status: 'PENDING'
		},
		{
			name: '정동구',
			email: 'donggu@stamper.network',
			role: '인턴',
			date: '04 Mar, 2025',
			status: 'APPROVED'
		},
		{
			name: '장원영',
			email: 'ive@stamper.network',
			role: 'Subscriber',
			date: '25 Apr, 2025',
			status: 'APPROVED'
		},
		{
			name: '피카츄',
			email: 'pocketmon@stamper.network',
			role: 'Admin',
			date: '25 Apr, 2025',
			status: 'REJECT'
		},
		{
			name: '윈터',
			email: 'aespa@stamper.network',
			role: 'Admin',
			date: '25 Apr, 2025',
			status: 'PENDING'
		}
	];

	const tableHeads = ['이름', '이메일', '사용자 유형', '상태', '가입일'];
</script>

<PageTitle title="Dashboard">
	<img slot="title_left" alt="speed-meter" src="/svg/speed-meter.svg" class="title_left_img" />
</PageTitle>

<section class="dashboard_list">
	{#each cards as { bg_gradient, title, number, increased, icon }}
		<Card background={bg_gradient} gap={30}>
			<img slot="card_header" src={icon} alt="chart" class="main_card_icon" />
			<div slot="card_content" class="main_card_content">
				<div class="main_card_title">{title}</div>
				<div class="main_card_number">${number}</div>
			</div>
			<div slot="card_footer" class="main_card_increased">
				Increased by {increased}%
			</div>
		</Card>
	{/each}
</section>

<section class="dashboard_table_container">
	<Card>
		<ContentsTitle slot="card_header" title="Standard Table Design" />
		<Table
			variant="striped"
			style="text-align : center;"
			slot="card_content"
			{tableHeads}
			tableDatas={users}
		/>
	</Card>
</section>

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
</style>
