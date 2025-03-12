<script lang="ts">
	export let backgroundColor: string = 'white';
	export let border: string | undefined = 'none';
	export let boxShadow: string | undefined = 'none';
	export let textAlign: string | undefined = 'left';
	export let padding: number | undefined = 10;
	export let style: string | undefined = '';

	export let tableHeads: any[] = [];
	export let tableDatas: any[] = [];
</script>

<table
	style="
		background-color: {backgroundColor};
		border: {border};
		box-shadow: {boxShadow};
		text-align: {textAlign};
		padding: {padding}px;
		{style}
	"
>
	<thead>
		{#each tableHeads as tablehead}
			<th>{@html tablehead}</th>
		{/each}
	</thead>
	<tbody>
		{#each tableDatas as tableData}
			<tr>
				{#each Object.values(tableData) as data}
					<td>{@html data}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
	<slot name="table-footer" />
</table>

<style lang="scss">
	table {
		border-radius: var(--border-radius);

		th,
		td {
			padding: 6px 4px;
		}
	}
</style>
