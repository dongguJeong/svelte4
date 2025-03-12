<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let icon: string;
	export let url: string = '#';
	$: active = $page.url.pathname === url;
</script>

<a href={url} class:active>
	<div><span>{title}</span></div>
	<img src={icon} alt={title} />
	<slot />
</a>

<style lang="scss">
	a {
		cursor: pointer;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 10px;
		width: 100%;

		span {
			font-weight: 600;
			font-size: 16px;
		}

		img {
			width: 20px;
			height: 20px;
			filter: var(--filter-gray);
		}

		&:hover {
			background: var(--skyblue-gradient);
			border-radius: 5px;

			img {
				filter: var(--filter-white);
			}

			span {
				color: white;
			}
		}
	}

	.active {
		background: var(--skyblue-gradient);
		border-radius: 5px;

		img {
			filter: var(--filter-white);
		}

		span {
			color: white;
		}
	}
</style>
