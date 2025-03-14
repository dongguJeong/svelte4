<script lang="ts">
	import HeaderTitle from './header-title.svelte';
	import { Button } from '../button';
	import { open } from '../../store/sidebar-store';
	import type { IButton } from '.';
	import { Badge } from '../badge';
	import { Avatar } from '../avatar';
	import { TextInput } from '../text-Input';

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		alert(target.value);
	};

	const toggleSidebar = () => {
		open.update((value) => !value);
	};

	const Buttons: IButton[] = [
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
</script>

<header class="header">
	<HeaderTitle title="blueBox" />
	<div class="header_right">
		<div class="header_input">
			<img src="/svg/magnifying.svg" alt="search" />
			<TextInput placeholder="search" size="md" style="width : 100%;" />
		</div>

		<div class="header_buttons">
			<Button ghost={true} text="정동구">
				<Avatar
					slot="left"
					src="/svg/picachu.png"
					border={true}
					size="md"
					rounded="lg"
					style="margin-right : 20px;"
				/>
				<img slot="right" src="/svg/triangle.svg" alt="triangle" style="margin-left : 20px;" />
			</Button>

			{#each Buttons as { src, alt, badge, onClick }, i}
				<Button ghost={true} style="position : relative;" {onClick}>
					{#if badge}
						<Badge variant="accent" />
					{/if}
					<img slot="left" class="header__buttons_image" {src} {alt} />
				</Button>
			{/each}
		</div>
	</div>
</header>

<style lang="scss">
	@import '../../style/mixin';
	.header {
		display: flex;
		align-items: center;
		background: #fff;
		width: 100%;
		padding-right: 40px;
		gap: 80px;
	}

	.header_right {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		.header_input {
			width: 40%;
			display: flex;
			gap: 10px;
			align-items: center;
			img {
				width: 24px;
				height: 24px;
				filter: $filter-gray;
			}
		}

		.header_buttons {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 20px;
			color: $text-secondary;

			button:hover {
				span {
					color: $primary-main;
				}
			}

			img {
				width: 20px;
				height: 20px;
				filter: $filter-gray;

				&:hover {
					filter: filter-primary;
				}
			}

			.header_profile {
				display: flex;
				gap: 10px;
				align-items: center;
				font-size: 14px;
				span {
					color: $text-secondary;
				}
			}
		}
	}
</style>
