<script lang="ts">
	import { onMount } from 'svelte';
	import clientImages from '$lib/images/client_images.png';
	import clientImage6 from '$lib/images/client_images/6.png';
	import clientImage7 from '$lib/images/client_images/7.png';
	import clientImage8 from '$lib/images/client_images/8.png';
	import clientImage9 from '$lib/images/client_images/9.png';
	import clientImage10 from '$lib/images/client_images/12.png';
	import clientImage11 from '$lib/images/client_images/12.png';
	import clientImage12 from '$lib/images/client_images/12.png';
	import clientImage14 from '$lib/images/client_images/14.png';
	import clientImage17 from '$lib/images/client_images/17.png';
	import clientImage18 from '$lib/images/client_images/18.png';
	import clientImage19 from '$lib/images/client_images/19.png';
	import clientImage20 from '$lib/images/client_images/20.png';

	interface Bubble {
		image?: string;
		color?: string;
		animationDelay: number;
		z: number;
		left: number;
		top: number;
	}

	let circleProgress = 0;

	let page: HTMLDivElement;
	let width: number;
	let height: number;
	let bubbles: Bubble[] = [];
	const images = [
		clientImage6,
		clientImage7,
		clientImage8,
		clientImage9,
		clientImage10,
		clientImage11,
		clientImage12,
		clientImage14,
		clientImage17,
		clientImage18,
		clientImage19,
		clientImage20
	];
	const colors = ['#E4EFA5', '#EEB69E', '#C1BAF2', '#F1B1E7', '#E4D3D7', '#7EEDD9'];

	let visible = true;
	onMount(() => {
		onScroll();

		width = window.innerWidth;
		height = window.innerHeight;

		const rect = page.getBoundingClientRect();

		bubbles = [...new Array(40).keys()].map((v) => {
			return {
				image: images[Math.round(Math.random() * (images.length - 1))],
				color: colors[Math.round(Math.random() * (colors.length - 1))],
				z: Math.random() > 0.5 ? 0 : Math.random() * 5,
				animationDelay: Math.random() * 1500,
				left: Math.random() * width,
				top: Math.random() * rect.height
			};
		});
	});

	function onScroll() {
		const { y, height } = page.getBoundingClientRect();
		if (y > window.innerHeight || -y > height) {
			visible = false;
			return;
		}
		visible = true;
		const scrollY = window.innerHeight - y - window.innerHeight / 2;
		circleProgress = scrollY / height > 1 ? 1 : scrollY / height;
	}

	function onResize() {
		width = window.innerWidth;
		height = window.innerHeight;
	}
</script>

<svelte:window on:scroll={onScroll} on:resize={onResize} />

<div bind:this={page} class="section3">
	{#each bubbles as bubble}
		<div
			class=" bg-white absolute z-0 rounded-full flex justify-center items-center"
			style:background-color={bubble.color}
			style:width={`${120 - 6 * bubble.z}px`}
			style:height={`${120 - 6 * bubble.z}px`}
			style:top={`${bubble.top}px`}
			style:left={`${bubble.left}px`}
			style:filter={`blur(${bubble.z}px)`}
		>
			<img class="w-10/12" src={bubble.image} />
			<svg
				class="fill-current text-pink absolute w-6 h-6 -top-8 jump"
				style:animation-delay={`${bubble.animationDelay}ms`}
				clip-rule="evenodd"
				fill-rule="evenodd"
				stroke-linejoin="round"
				stroke-miterlimit="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
					fill-rule="nonzero"
				/></svg
			>
		</div>
	{/each}
	<div
		class="fixed z-0"
		style:left={`${width / 2}px`}
		style:top={`${height / 2}px`}
		style:opacity={visible ? 1 : 0}
	>
		<div
			class="z-10 relative bord bg-bg rounded-full flex justify-center items-center flex-col -translate-x-1/2 -translate-y-1/2"
			style:width="600px"
			style:height="600px"
		>
			<div class="text-6xl text-white px-16"><span class="text-pink">1k+</span> Happy Clients</div>
			<div class="px-16 text-gray-400 text-center mt-8">
				G sdhsuhLorem Ipsum is simply dummy text of the sdssdh printing and typesetting industry.
				Loremas sdcsn Ipsum has been the industry's standardas sdsdcssdjdummy text ever since the
				1500DGs.
			</div>
			<div class="w-60 mt-8">
				<img src={clientImages} alt="client-image" />
			</div>
		</div>

		<div class="absolute top-0 flex justify-center items-center -translate-x-1/2 -translate-y-1/2">
			<svg style:width="680px" style:height="680px" viewBox="0 0 80 80">
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stop-color="rgb(117, 21, 219)" />
					<stop offset="50%" stop-color="rgb(235, 128, 15)" />
					<stop offset="100%" stop-color="rgb(225, 27, 158)" />
				</linearGradient>
				<circle
					transform="rotate(-90 40 40)"
					class="circle"
					stroke-dasharray="227"
					stroke-dashoffset={circleProgress * 227 - 227}
					cx="40"
					cy="40"
					r="36"
					fill="transparent"
					stroke="url(#gradient)"
					stroke-width="1"
				/>
			</svg>
		</div>
	</div>
</div>

<style lang="postcss" scoped>
	.section3 {
		@apply w-screen flex flex-col overflow-hidden relative z-20;
		height: 600vh;
	}
	.bg-effect {
		background: linear-gradient(
			180deg,
			rgb(117, 21, 219) 0%,
			rgb(235, 128, 15) 48.45%,
			rgb(225, 27, 158) 99.99%
		);
	}
	.jump {
		animation: jump 1s infinite;
		animation-timing-function: ease;
	}
	@keyframes jump {
		0% {
			transform: translateY(0);
		}
		30% {
			transform: translateY(-10px);
		}
		50% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
