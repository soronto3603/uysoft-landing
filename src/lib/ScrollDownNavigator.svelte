<div class="wrapper">
	<div class="pulse" style:animation-delay="1000ms" />
	<div class="pulse" style:animation-delay="1500ms" />
	<div class="pulse" style:animation-delay="1800ms" />
	<div class="pulse" style:animation-delay="2000ms" />
	<div class="pulse" style:animation-delay="2100ms" />
</div>

<style lang="postcss" scoped>
	.wrapper {
		@apply flex justify-center flex-col items-center gap-8;
	}
	.wrapper div {
		@apply h-2;
		background: linear-gradient(
			270deg,
			rgba(0, 0, 0, 0.15) 2.6%,
			rgba(107, 70, 255, 0.67) 33.85%,
			rgba(255, 47, 234, 0.67) 69.79%,
			rgba(0, 0, 0, 0.14) 100%
		);
		box-shadow: inset 0px 4px 39px 23px rgba(0, 0, 0, 0.25);
	}
	.wrapper div:first-child {
		width: 712px;
	}
	.wrapper div:nth-child(2) {
		width: 418px;
	}
	.wrapper div:nth-child(3) {
		width: 280px;
	}
	.wrapper div:nth-child(4) {
		width: 176px;
	}
	.wrapper div:nth-child(5) {
		width: 70px;
	}

	@keyframes pulse {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	.pulse {
		opacity: 0;
		animation: pulse 7s infinite;
		animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
</style>
