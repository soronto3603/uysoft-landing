<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement | null;
	let clientY = 0;
	let scrollY = 0;
	let windowHeight = 0;
	let progress = 1;
	export let offset = 40;
	export let enteringSpace = 40;
	export let exitingSpace = 40;
	export let styleHandler = (progress: number) => {
		return `opacity:${progress < 0.1 ? 0 : progress}`;
	};

	let style = '';

	$: if (clientY) {
		if (clientY < offset || clientY > windowHeight - offset) {
			progress = 0;
		} else if (clientY - offset < enteringSpace) {
			progress = (clientY - offset) / enteringSpace;
		} else if (windowHeight - clientY - offset < exitingSpace) {
			progress = (windowHeight - clientY - offset) / exitingSpace;
		} else {
			progress = 1;
		}

		style = styleHandler(progress);
	}

	onMount(() => {
		windowHeight = window.innerHeight;
	});

	function onScroll(e: any) {
		if (!container) {
			return;
		}

		const { x, y, height } = container.getBoundingClientRect();
		clientY = y + height / 2;
		scrollY = window.scrollY;
	}
</script>

<svelte:window on:scroll={onScroll} />

<div bind:this={container} {style}>
	<slot />
</div>

<style>
</style>
