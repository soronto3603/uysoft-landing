<script lang="ts">
	interface Item {
		title: string;
		content: string;
	}
	export let item: Item;
	export let index: number;

	let svg: SVGElement;

	let show: boolean;
	function onScroll() {
		const windowHeight = window.innerHeight;
		const { y, height } = svg.getBoundingClientRect();
		show = Math.abs(windowHeight - y - height / 3 - windowHeight / 2) < 40 ? true : false;
	}
</script>

<svelte:window on:scroll={onScroll} />

<div class="ml-28 translate-x-1/2" class:mt-40={index !== 0}>
	<div
		class="absolute w-12 h-12 transition-all duration-100 rounded-full"
		class:scale-150={show}
		style:left="-80px"
	>
		<svg
			class="bg-bg"
			bind:this={svg}
			clip-rule="evenodd"
			fill-rule="evenodd"
			stroke-linejoin="round"
			stroke-miterlimit="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<linearGradient id={`gradient_${index}`} x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stop-color="#E85A42" />
				<stop offset="100%" stop-color="#E43972" />
			</linearGradient>
			<path
				d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
				fill-rule="nonzero"
				fill={show ? `url(#gradient_${index})` : 'gray'}
			/>
		</svg>
	</div>
	<div
		class="text-white text-3xl pc:text-5xl transition-all duration-1000"
		class:opacity-25={!show}
	>
		{item.title}
	</div>
	<div
		class="text-xl text-gray-400 text-justify mt-6 transition-all duration-1000"
		class:opacity-25={!show}
		style:width="600px"
	>
		{item.content}
	</div>
</div>
