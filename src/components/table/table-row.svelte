<script lang="ts">
	export let name: string;
	export let email: string;
	export let user_type: string;
	export let joined: string;
	export let status: 'PENDING' | 'APPROVED' | 'REJECT';

	const statusColor = {
		PENDING: 'pending',
		APPROVED: 'approved',
		REJECT: 'reject'
	};
</script>

<tr>
	<th scope="row">{name}</th>
	<td>{email}</td>
	<td>{user_type}</td>
	<td>{joined}</td>
	<td>
		<div class="status {statusColor[status]}">{status}</div>
	</td>
</tr>

<style lang="scss">
	@use '../../style/mixin' as *;
	tr {
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		color: #868e96;
		td,
		th {
			text-align: left;
			font-size: 14px;
			padding: 10px 0px;
		}

		th {
			font-weight: 500;
		}

		td:last-child {
			display: flex;
			align-items: center;
			padding-right: 6px;
		}
	}

	.status {
		width: 78px;
		font-size: 14px;
		color: white;
		font-weight: 500;
		padding: 4px 6px;
		text-align: center;
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

	@include small {
		tr {
			display: flex;
			flex-direction: column;
			padding-bottom: 30px;
		}

		tr:not(:first-child) {
			padding-top: 20px;
		}

		tr:last-child {
			border-bottom: none;
		}
		td,
		th {
			padding: 4px 0px;
		}
	}
</style>
