<script lang="ts">
	export let badge: boolean = false;
	export let onClick: () => void | undefined;
</script>

<button on:click={onClick}>
	<slot />
	{#if badge}
		<div class="badge" />
	{/if}
</button>

<style lang="scss">
	@import '../../style/mixin';
	button {
		cursor: pointer;
		position: relative;
		border: none;
		background-color: transparent;

		img {
			width: 20px;
			height: 20px;
			filter: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%) contrast(84%);
		}
	}

	button:hover img {
		filter: invert(65%) sepia(86%) saturate(259%) hue-rotate(150deg) brightness(83%) contrast(98%);
	}

	.badge {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #b87dbc;
		position: absolute;
		top: -2px;
		right: 4px;
		z-index: 10;
	}

	@include small {
		button:first-child {
			display: none;
		}

		button:nth-child(2) {
			display: none;
		}

		button:nth-child(3) {
			display: none;
		}
	}
</style>
