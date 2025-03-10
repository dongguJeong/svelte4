<script lang="ts">
	export let name: string;
</script>

<div class="header_profile">
	<img src="/svg/picachu.png" alt="picachu" />
	<span>{name}</span>
	<img src="/svg/triangle.svg" alt="arrow-down" />
</div>

<style lang="scss">
	@import '../../style/mixin';
	.header_profile {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;

		img {
			width: 30px;
			height: 30px;
		}

		img:first-child {
			border-radius: 50%;
			border: 2px solid rgba(0, 0, 0, 0.3);
		}

		img:last-child {
			width: 20px;
			height: 20px;
			filter: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%) contrast(84%);
		}

		span {
			color: var(--gray);
			font-size: 14px;
		}
	}

	@include small {
		.header_profile {
			span {
				display: none;
			}
			gap: 2px;
		}
	}
</style>
