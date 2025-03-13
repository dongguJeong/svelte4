<script lang="ts">
	export let variant: 'striped' | 'border' | 'none' = 'none';
	export let style: string | undefined = '';
	export let tableHeads: any[] = [];
	export let tableDatas: any[] = [];
</script>

<table
	style="
		{style}
	"
	class={variant}
>
	<thead>
		{#each tableHeads as tablehead}
			<th>{tablehead}</th>
		{/each}
	</thead>
	<tbody>
		{#each tableDatas as tableData}
			<tr>
				{#each Object.values(tableData) as data}
					<td>{data}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
	<slot name="table-footer" />
</table>

<style lang="scss">
	table {
		border-radius: var(--border-radius);
		background-color: white;
		border: none;
		th,
		td {
			padding: 6px 4px;
		}

		&.striped {
			thead,
			tr:nth-child(even) {
				background-color: rgba(0, 0, 0, 0.05);
			}
		}

		&.border {
			border: 1px solid rgba(0, 0, 0, 0.2);
		}
	}
</style>
