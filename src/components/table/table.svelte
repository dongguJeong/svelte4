<script lang="ts">
	import type { IUser } from '.';
	import TableRow from '../../components/table/table-row.svelte';

	const users: IUser[] = [
		{
			name: '카리나',
			email: 'aespa@stamper.network',
			user_type: 'Admin',
			joined: '25 Apr, 2025',
			status: 'PENDING'
		},
		{
			name: '정동구',
			email: 'donggu@stamper.network',
			user_type: '인턴',
			joined: '04 Mar, 2025',
			status: 'APPROVED'
		},
		{
			name: '장원영',
			email: 'ive@stamper.network',
			user_type: 'Subscriber',
			joined: '25 Apr, 2025',
			status: 'APPROVED'
		},
		{
			name: '피카츄',
			email: 'pocketmon@stamper.network',
			user_type: 'Admin',
			joined: '25 Apr, 2025',
			status: 'REJECT'
		},
		{
			name: '윈터',
			email: 'aespa@stamper.network',
			user_type: 'Admin',
			joined: '25 Apr, 2025',
			status: 'PENDING'
		}
	];
</script>

<section class="main_table_container">
	<h1>Standard Table Design</h1>
	<table>
		<thead>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Email</th>
				<th scope="col">User Type</th>
				<th scope="col">Joined</th>
				<th scope="col">Status</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<TableRow
					name={user.name}
					email={user.email}
					user_type={user.user_type}
					joined={user.joined}
					status={user.status}
				/>
			{/each}
		</tbody>
	</table>
</section>

<style lang="scss">
	@use '../../style/mixin' as *;

	.main_table_container {
		background-color: white;
		border-radius: 10px;
		padding: 20px 20px;
		box-shadow: var(--box-shadow);

		h1 {
			font-size: 20px;
			font-weight: 700;
			color: var(--gray);
		}

		table {
			width: 100%;
		}

		thead {
			tr {
				border-bottom: 1px solid rgba(0, 0, 0, 0.3);
			}

			th {
				text-align: left;
				padding: 10px 0px;
				color: var(--gray);
				font-weight: 600;
				font-size: 16px;
				width: 20%;

				&:nth-child(2) {
					width: 30%;
				}

				&:last-child {
					width: 10%;
				}
			}
		}
	}

	@include small {
		thead {
			display: none;
		}

		h1 {
			margin-top: 20px;
		}

		tbody {
			display: flex;
			flex-direction: column;
		}
	}
</style>
