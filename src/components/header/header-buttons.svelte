<script lang="ts">
	import HeaderButton from './header-button.svelte';
	import HeaderProfile from './header-profile.svelte';
	import { open } from '../../store/sidebar-store';

	interface IIMAGE {
		src: string;
		alt: string;
		badge: boolean;
	}

	interface IButton extends IIMAGE {
		onClick?: () => void;
	}

	const IMAGES: IButton[] = [
		{
			src: '/svg/mail.svg',
			alt: 'mail',
			badge: true
		},
		{
			src: '/svg/bell.svg',
			alt: 'bell',
			badge: true
		},
		{
			src: '/svg/hamburger.svg',
			alt: 'hamburger',
			badge: false,
			onClick: () => {
				toggleSidebar();
			}
		}
	];

	const toggleSidebar = () => {
		open.update((value) => !value);
	};
</script>

<section class="header_buttons">
	<HeaderProfile name="정동구" />
	{#each IMAGES as image}
		<HeaderButton badge={image.badge} onClick={image.onClick ?? (() => {})}>
			<img src={image.src} alt={image.alt} />
		</HeaderButton>
	{/each}
</section>

<style lang="scss">
	@import '../../style/mixin.scss';
	.header_buttons {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;

		button {
			cursor: pointer;
			position: relative;
			border: none;
			background-color: transparent;

			img {
				width: 20px;
				height: 20px;
				filter: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%)
					contrast(84%);
			}
		}

		button:hover img {
			filter: invert(65%) sepia(86%) saturate(259%) hue-rotate(150deg) brightness(83%) contrast(98%);
		}
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

	@include medium {
		.header_buttons {
			gap: 5px;
		}
	}

	@include small {
		.header_buttons {
			gap: 10px;
		}
	}
</style>
