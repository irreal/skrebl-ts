<script lang="ts">
	import type { Hint } from '../types/hint.type';
	import { getDataFromStrings } from '../word-data-utils';
	import Box from './box.svelte';

	export let word = '';
	export let uppercase = true;
	export let hints: Hint[] = [];
	$: displayData = getDataFromStrings(word, hints, { uppercase });
</script>

<div class="flex gap-2">
	{#each displayData as data}
		<Box letter={data.letter} hint={data.hint} />
	{/each}
</div>

<style>
</style>
