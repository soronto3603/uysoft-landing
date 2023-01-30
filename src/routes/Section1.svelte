<script lang="ts">
	import ScrollOnMount from '../lib/scroll-on-mount.svelte';
	import DelayOnMount from '../lib/delay-on-mount.svelte';
	import profile from '$/lib/images/profile.png';
	import profileBlurFrame from '$/lib/images/profile_blur_frame.png';
	import { fly } from 'svelte/transition';
	import ScrollDownNavigator from '../lib/ScrollDownNavigator.svelte';
	// import profile form '$lib/images/'
</script>

<div class="h-screen w-screen overflow-hidden flex justify-center flex-col z-50 relative bg-bg">
	<ScrollOnMount offset={0} enteringSpace={40} exitingSpace={400}>
		<DelayOnMount delay={1000} duration={1000}>
			<div class="w-full flex justify-center items-center">
				<div class="flex justify-center items-center">
					<div class="absolute w-96 h-96 bg-effect p-8 rounded-full blur-3xl z-0" />
					<div
						style:background-image={`url(${profileBlurFrame})`}
						class="w-96 h-96 p-2 bg-contain flex justify-center items-center z-10"
					>
						<img class="w-full" src={profile} alt="profile" />
					</div>
				</div>
			</div>
		</DelayOnMount>
	</ScrollOnMount>

	<ScrollOnMount>
		<DelayOnMount delay={1500} duration={1000}>
			<div
				style:font-size="90px"
				in:fly={{ delay: 1000, duration: 1000 }}
				class="w-full flex justify-center items-center text-white font-black mt-12"
			>
				WALEED SHABIR
			</div>
		</DelayOnMount>
	</ScrollOnMount>

	<ScrollOnMount>
		<DelayOnMount delay={1800} duration={1000}>
			<div style:font-size="36px" class="text-gray-500 w-full flex justify-center items-center">
				A UNIVERSAL PRODUCT DESIGNER
			</div>
		</DelayOnMount>
	</ScrollOnMount>

	<ScrollOnMount enteringSpace={0}>
		<DelayOnMount delay={1800} duration={1000}>
			<div class="w-full flex items-center justify-center mt-4">
				<ScrollDownNavigator />
			</div>
		</DelayOnMount>
	</ScrollOnMount>
</div>

<style lang="postcss" scoped>
	.bg-effect {
		background: linear-gradient(
			180deg,
			rgba(247, 96, 169, 0.77) 0%,
			rgba(61, 153, 233, 0.77) 48.45%,
			rgba(149, 58, 231, 0.77) 99.99%,
			rgba(217, 217, 217, 0) 100%
		);
	}
</style>
