<script lang="ts">
	import { fly } from 'svelte/transition';

	interface ScrollTriggerOption {
		enterTiming?: number;
		exitTiming?: number;
		enterDuration?: number;
		exitDuration?: number;
	}

	const defaultOption: ScrollTriggerOption = {
		enterTiming: 0,
		exitTiming: 0,

		enterDuration: 1000,
		exitDuration: 1000
	};

	export let option: ScrollTriggerOption;

	option = {
		...defaultOption,
		...option
	};

	let visible = false;
	let container: HTMLDivElement;

	function onScroll() {
		if (!container) {
			return;
		}

		const height = window.innerHeight;
		const { y } = container.getBoundingClientRect();

		if (y < (option?.exitTiming ?? 0)) {
			visible = true;
		} else {
			visible = false;
		}

		// if (y < height - (option?.enterTiming ?? 0)) {
		// 	startEnter = true;
		// } else {
		// 	startEnter = false;
		// }
	}
</script>

<svelte:window on:scroll={onScroll} />

<div bind:this={container} transition:fly={{ y: 200, duration: 2000 }}>
	{#if visible}
		<slot />
	{/if}
</div>
