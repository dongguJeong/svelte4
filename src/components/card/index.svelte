<script lang="ts">
	let className = '';
	export { className as class };
	export let background: string | undefined = 'white';
	export let gap: number | string | undefined = '10px';
	export let flexDirection: string | undefined = 'column';
</script>

<div
	class={`card ${className}`}
	style="
        --card-gap: {typeof gap === 'number' ? `${gap}px` : gap};
        --card-flexDirection: {flexDirection};
        --card-background: {background};
    "
>
	<slot name="card_header" />
	<slot name="card_content" />
	<slot name="card_footer" />
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: var(--card-flexDirection);
		gap: var(--card-gap);
		border-radius: var(--border-md);
		background: var(--card-background);
		padding: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
