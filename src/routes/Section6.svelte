<script lang="ts">
	import { onMount } from 'svelte';

	let width = 0;
	let height = 50;
	let main: HTMLDivElement;
	let transformX = 0;
	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		width = window.innerHeight / 2;
		transformX = (window.innerHeight / 2) * -1;
	});

	function scrollMove(e: Event) {
		const x = main.getBoundingClientRect();
		if (x.y <= window.innerHeight) {
			const halfScreen = window.innerHeight / 2;
			width = x.y;
			transformX = (360 / window.innerHeight) * width;
		}
	}
</script>

<svelte:window on:scroll={scrollMove} />

<div
	bind:this={main}
	class="h-screen text-white w-screen relative z-30"
	on:mousemove={(e) => {
		const screenY = window.innerHeight;
		const screenX = window.innerWidth;
		mouseY = (e.clientY - screenY / 2) * (40 / screenY);
		mouseX = (e.clientX - screenX / 2) * (20 / screenX);
	}}
>
	<div
		class="w-full h-full relative "
		style="transform-style: preserve-3d;   top: {width * -1}px; transform: rotateY({transformX +
			mouseX}deg) rotateX({mouseY}deg) "
	>
		{#each new Array(20) as x, index}
			<div
				class="absolute w-full h-full flex justify-center  items-center front text-5xl pc:text-9xl  text-red-300 font-bold"
				style={transformX + mouseX >= -270 && transformX + mouseX <= -90
					? `transform: translateZ(${index * 2}px) rotateY(180deg`
					: `transform: translateZ(${index * 2}px)`}
			>
				{#if transformX + mouseX >= -90}
					<div style:text-shadow={'0 0 10px rgb(145, 52, 83)'}>THANK YOU💕</div>
				{:else if transformX + mouseX >= -270}
					<div class="text-gray-700" style:text-shadow={'0 0 10px lightblue'}>FOR WATCHING</div>
				{:else}
					<div class="text-white" style:text-shadow={'0 0 10px lightblue'}>UY SOFT</div>
				{/if}
			</div>
		{/each}
	</div>
	<div class="h-screen" />
</div>

<style>
</style>
