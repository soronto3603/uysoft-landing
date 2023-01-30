<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement | null;
	let show = false;
	export let delay = 1000;
	export let duration = 1000;

	onMount(() => {
		if (!container) {
			return;
		}

		const { x, y } = container.getBoundingClientRect();

		if (x >= 0 && x <= window.innerWidth && y >= 0 && y <= window.innerHeight) {
			setTimeout(() => (show = true), delay);
		} else {
			show = true;
		}
	});
</script>

<div
	style:animation-duration={`${duration}ms`}
	style:animation-timing-function="ease-in-out"
	class={show ? 'fade-in' : 'opacity-0'}
	bind:this={container}
>
	<slot />
</div>

<style scoped>
	.fade-in {
		animation: fadein 3s;
	}
	@keyframes fadein {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
