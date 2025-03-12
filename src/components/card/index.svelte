<script lang="ts">
	export let style: string | undefined = '';
	export let background: string | undefined = 'white';
	export let gap: number | string | undefined = '10px';
	export let flexDirection: string | undefined = 'column';
	export let padding: number | undefined = 16;
</script>

<div
	class="card"
	style="
	gap: {typeof gap === 'number' ? `${gap}px` : gap};
	flex-direction: {flexDirection};
	background: {background};
	padding: {padding}px;
	{style}
"
>
	<slot name="card_header" />
	<slot name="card_content" />
	<slot name="card_footer" />
</div>

<style lang="scss">
	.card {
		display: flex;
		border-radius: var(--border-md);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
