<script lang="ts">
	import { onMount } from 'svelte';

	let width = 0;
	let height = 50;
	let main: HTMLDivElement;
	let transformX = 0;
	let mouseX = 0;
	let mouseY = 0;
	let top = 0;
	let trans3d = 0;
	let isScrolling = false;

	onMount(() => {
		width = window.innerHeight / 2;
		transformX = (window.innerHeight / 2) * -1;
		let frame = requestAnimationFrame(loop);
		function loop() {
			frame = requestAnimationFrame(loop);
			top = width;
			trans3d = transformX;
		}
	});

	function onScroll() {
		const x = main.getBoundingClientRect();

		if (x.y <= window.innerHeight) {
			const halfScreen = window.innerHeight / 2;
			width = x.y;
			transformX = (360 / window.innerHeight) * width;
		}
	}
</script>

<svelte:window on:scroll|passive={onScroll} />

<div
	bind:this={main}
	class="h-screen text-white w-screen relative z-30"
	on:mousemove={(e) => {
		requestAnimationFrame(() => {
			const screenY = window.innerHeight;
			const screenX = window.innerWidth;
			mouseY = (e.clientY - screenY / 2) * (40 / screenY);
			mouseX = (e.clientX - screenX / 2) * (360 / screenX);
			console.log(mouseX);
		});
	}}
>
	<div
		class="w-full h-full relative "
		style="transform-style: preserve-3d;   bottom: {top}px; transform: rotateY({trans3d +
			mouseX}deg) rotateX({mouseY}deg) "
	>
		{#each new Array(10) as x, index}
			<div
				class="absolute w-full h-full flex justify-center  items-center front text-5xl pc:text-9xl  text-red-300 font-bold"
				style={trans3d + mouseX >= -270 && trans3d + mouseX <= -90
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
