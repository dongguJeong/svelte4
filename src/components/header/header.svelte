<script lang="ts">
	import HeaderTitle from './header-title.svelte';
	import { TextField } from '../textField';
	import { Button } from '../button';
	import { open } from '../../store/sidebar-store';
	import type { IButton } from '.';
	import { Badge } from '../badge';
	import { Avatar } from '../avatar';

	const handleChange = (e) => {
		alert(e.target.value);
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
			<TextField
				on:change={handleChange}
				placeholder="Search Project"
				size="medium"
				type="text"
				mode="outlined"
			>
				<img
					slot="icon-start"
					src="/svg/magnifying.svg"
					alt="magnifying"
					class="header_input_img"
				/>
			</TextField>
		</div>

		<div class="header_buttons">
			<Button onClick={() => {}} variant="ghost">
				<div class="header_profile">
					<Avatar src="/svg/picachu.png" border="gray" width={20} height={20} />
					<span>정동구</span>
					<img src="/svg/triangle.svg" alt="triangle" />
				</div>
			</Button>

			{#each Buttons as { src, alt, badge, onClick }, i}
				<Button onClick={onClick ?? (() => {})} variant="ghost">
					{#if badge}
						<Badge variant="destructive">
							<div class="red_badge" />
						</Badge>
					{/if}
					<img class="header__buttons_image" {src} {alt} />
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

		& > div:first-child {
			width: 40%;
		}
	}

	.header_input {
		.header_input_img {
			width: 18px;
			height: 18px;
			color: #e2e2e2;
			filter: var(--filter-gray);
		}
	}

	.header_buttons {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;

		.header_profile {
			display: flex;
			gap: 10px;
			align-items: center;
			font-size: 14px;
			span {
				color: var(--gray);
			}
		}

		button:hover {
			span {
				color: var(--skyblue);
			}

			img {
				filter: var(--filter-skyblue);
			}
		}

		img {
			width: 20px;
			height: 20px;
			filter: var(--filter-gray);
		}
	}

	.red_badge {
		background-color: red;
		position: absolute;
		border-radius: 4px;
		top: 0px;
		right: 0px;
		width: 4px;
		height: 4px;
	}

	@include medium {
		.header_title {
			width: auto;
		}
		.header {
			gap: 0;
			justify-content: space-between;
		}
	}

	@include small {
		.header_buttons {
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
	}
</style>
