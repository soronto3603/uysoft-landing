<script lang="ts">
	import { onMount } from 'svelte';
	import { SlidingPuzzle } from './sliding-puzzle';
	import type { Piece } from './sliding-puzzle';
	import { flip } from 'svelte/animate';

	let puzzle: SlidingPuzzle;
	let pieces: Piece[] = [];
	const margin = 10;
	const size = 60;
	onMount(() => {
		puzzle = new SlidingPuzzle();
		pieces = puzzle.pieces.filter((piece) => !piece.isEmpty);
	});

	function onClickPuzzle(piece: Piece) {
		puzzle.move(piece.id);
		pieces = puzzle.pieces.filter((piece) => !piece.isEmpty);
	}
</script>

<div style:width="600px" style:height="600px">
	{#each pieces as piece (piece.id)}
		<div
			animate:flip={{ duration: 200 }}
			class="absolute bg-white"
			style:width={`${size}px`}
			style:height={`${size}px`}
			style:top={`${piece.x * (size + margin)}px`}
			style:left={`${piece.y * (size + margin)}px`}
			on:click={() => onClickPuzzle(piece)}
		/>
	{/each}
</div>
