<script lang="ts">
	import Matter from 'matter-js';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	interface BodyWrapper {
		body: Matter.Body;
		text: string;
		color: string;
		type: string;
		r: number;
		style: boolean;
	}

	let boxes1: BodyWrapper[] = [];
	let boxes2: BodyWrapper[] = [];
	let frame: number | null = null;
	let engine: Matter.Engine;

	const colors = ['rgb(117, 21, 219)', 'rgb(235, 128, 15)', 'rgb(225, 27, 158)'];
	onMount(() => {
		const { width, height } = container.getBoundingClientRect();
		var Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Bodies = Matter.Bodies,
			Composite = Matter.Composite;

		// create an engine
		engine = Engine.create();

		const grounds = [
			Bodies.rectangle(0, height - 20, width * 2, 30, { isStatic: true }),
			Bodies.rectangle(0, 0, 10, height * 2, { isStatic: true }),
			Bodies.rectangle(width, 0, 10, height * 2, { isStatic: true })
		];

		boxes1 = [
			...`😀 😃 😄  😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌  😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤗 🫡 🤔 🫢 🤭 🤫 🤥 😶 😶‍🌫️ 😐 
☀️industry. 💕Lorem😁 😆 😅 Ipsum is simply dummy text of the
printing and typesetting😂industry. 🙃Lorem Ipsum is 😍 🥰 😘simply dummy text of the
printing and typesetting🙏industry. 🙂Lorem😗 😙 😚 😋 😛 😝Ipsum is simply dummy text of the
printing and typesettingindu😀stry.
`
		]
			.filter((v) => v !== ' ')
			.map((ch, i) => {
				const width = window.innerWidth;
				const size = 30;
				const y = size + Math.floor((size * 2 + i * size * 2) / width) * size * 2;
				const x = size + ((i * size * 2) % width);
				return {
					text: ch,
					style: false,
					body: Bodies.circle(x, y, size, {
						force: {
							x: 0,
							y: -Math.random()
						},
						mass: Math.random() > 0.5 ? 2 : 5
					}),
					color: colors[Math.round(Math.random() * (colors.length - 1))],
					r: size,
					type: 'circle'
				};
			});

		Composite.add(engine.world, [...boxes1.map((box) => box.body), ...grounds]);

		return () => {
			if (frame) {
				cancelAnimationFrame(frame);
			}
		};
	});

	function onScroll() {
		const { y } = container.getBoundingClientRect();
		if (y < 0 && frame === null) {
			frame = requestAnimationFrame(loop);
			function loop() {
				frame = requestAnimationFrame(loop);
				Matter.Engine.update(engine);
				boxes1 = boxes1;
			}
		}
	}

	function onClickCircle(box: BodyWrapper) {
		Matter.Body.applyForce(box.body, box.body.position, {
			x: 0,
			y: -1
		});
	}
</script>

<svelte:window on:scroll={onScroll} />

<div bind:this={container} class="section4">
	<div class="text-black" style:top="60px">
		{#each boxes1 as box, i}
			<span
				on:click={() => onClickCircle(box)}
				class="absolute text-center font-bold text-white rounded-full hover:bg-white flex justify-center items-center"
				style:top={`${box.body.position.y - box.r}px`}
				style:left={`${box.body.position.x - box.r}px`}
				style:color={`${box.color}`}
				style:width={`${box.r * 2}px`}
				style:height={`${box.r * 2}px`}
				style:transform={`rotate(${(box.body.angle * 180) / Math.PI}deg)`}
				style:font-size="60px">{box.text}</span
			>
		{/each}
	</div>
</div>

<style lang="postcss" scoped>
	.section4 {
		@apply w-full h-screen border-t border-white overflow-hidden z-50 bg-bg relative flex justify-center items-center flex-col;
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
