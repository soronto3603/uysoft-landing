<script lang="ts">
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	import Section4 from './Section4.svelte';
	import Section5 from './Section5.svelte';
	import Section6 from './Section6.svelte';
</script>

<div class="wrapper">
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section6 />
</div>

<style lang="postcss" scoped>
	.wrapper {
		@apply w-full;
		height: 1200vh;
	}
</style>
