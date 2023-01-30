<script lang="ts">
	import DelayOnMount from '$/lib/delay-on-mount.svelte';
	import ScrollOnMount from '$/lib/scroll-on-mount.svelte';
	import textContent from '$/lib/images/text-content.svg';
	import { onMount } from 'svelte';
	import CircleCheck from '$/lib/icons/circle-check.svelte';
	import ScrollActivableText from '$/lib/Section2/ScrollActivableText.svelte';

	const texts = [...new Array(5).keys()];
	let progress = 0;
	let height = 0;

	const items = [
		{
			title: "Unlock digital world's enterance",
			content: `Lorem ipsum dolor sit amet consectetur. Tortor morbi libero amet amet sed. Arcu nisl
				sagittis tincidunt adipiscing amet in. Sit fringilla nibh pharetra enim velit odio tortor
				urna turp is. Vulputate ac morbi ac dolor tellus vel. Sit odio fusce est tempor arcu vel sed
				at. Eget nec integer mattis in id molest ie cursus tempus senectus. Sed aliquet donec eget
				id.`
		},
		{
			title: "Unlock digital world's enterance",
			content: `Lorem ipsum dolor sit amet consectetur. Tortor morbi libero amet amet sed. Arcu nisl
				sagittis tincidunt adipiscing amet in. Sit fringilla nibh pharetra enim velit odio tortor
				urna turp is. Vulputate ac morbi ac dolor tellus vel. Sit odio fusce est tempor arcu vel sed
				at. Eget nec integer mattis in id molest ie cursus tempus senectus. Sed aliquet donec eget
				id.`
		},
		{
			title: "Unlock digital world's enterance",
			content: `Lorem ipsum dolor sit amet consectetur. Tortor morbi libero amet amet sed. Arcu nisl
				sagittis tincidunt adipiscing amet in. Sit fringilla nibh pharetra enim velit odio tortor
				urna turp is. Vulputate ac morbi ac dolor tellus vel. Sit odio fusce est tempor arcu vel sed
				at. Eget nec integer mattis in id molest ie cursus tempus senectus. Sed aliquet donec eget
				id.`
		},
		{
			title: "Unlock digital world's enterance",
			content: `Lorem ipsum dolor sit amet consectetur. Tortor morbi libero amet amet sed. Arcu nisl
				sagittis tincidunt adipiscing amet in. Sit fringilla nibh pharetra enim velit odio tortor
				urna turp is. Vulputate ac morbi ac dolor tellus vel. Sit odio fusce est tempor arcu vel sed
				at. Eget nec integer mattis in id molest ie cursus tempus senectus. Sed aliquet donec eget
				id.`
		}
	];

	onMount(() => {
		height = window.innerHeight;
		let frame = requestAnimationFrame(loop);
		function loop() {
			frame = requestAnimationFrame(loop);
			progress = progress >= 1 ? 0 : progress + 0.005;
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	let subpage: HTMLDivElement;
	let subpageY = 0;

	let mainpage: HTMLDivElement;
	let mainpageY = 0;

	let activeTexts: HTMLDivElement[] = [];
	function onSubpageScroll() {
		const subpageRect = subpage.getBoundingClientRect();
		subpageY = height - subpageRect.y - height / 2;

		const mainpageRect = mainpage.getBoundingClientRect();
		mainpageY = height - mainpageRect.y - height / 2;
	}
</script>

<svelte:window on:scroll={onSubpageScroll} />

<div
	bind:this={subpage}
	class="h-screen w-screen border-white overflow-hidden flex justify-center bg-bg relative z-50"
>
	<div
		class="w-4 h-4 rounded-full relative bg-pink"
		style:top={`${subpageY}px`}
		style:opacity={subpageY / height}
	/>
</div>

<div bind:this={mainpage} class="section2">
	<div class="flex flex-col items-center">
		<div class="absolute left-0 top-0">
			{#each texts as i}
				<div class="h-screen p-20" style:transform={`translateY(-${progress * height}px)`}>
					<img class="h-full" src={textContent} alt="text" />
				</div>
			{/each}
		</div>
		<div class="absolute">
			<div class="vertical-line w-1 bg-effect mt-40" />
		</div>
		<div class="absolute">
			<div class="w-4 h-4 rounded-full bg-white relative" style:top={`${mainpageY}px`} />
		</div>
		<div class="absolute" />
		<div class="w-full h-48" />
		{#each items as item, index}
			<ScrollActivableText {item} {index} />
		{/each}
	</div>
</div>

<style lang="postcss" scoped>
	.section2 {
		@apply h-screen relative border-t border-b border-gray-500 overflow-hidden z-50 bg-bg;
		height: 200vh;
	}
	.vertical-line {
		height: 200vh;
	}
	.bg-effect {
		background: linear-gradient(
			180deg,
			rgb(117, 21, 219) 0%,
			rgb(235, 128, 15) 48.45%,
			rgb(225, 27, 158) 99.99%
		);
	}
</style>
