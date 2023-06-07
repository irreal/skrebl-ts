<script lang="ts">
	import type { Hint } from '../types/hint.type';

	const hintColorMap: Record<Hint, string> = {
		wrongPlace: 'bg-[#B09F4F]',
		correct: 'bg-[#608C51]',
		empty: 'bg-[#3A393D]'
	};

	export let letter = '';
	export let hint: Hint = 'empty';
</script>

<div
	class={`text-6xl text-white ${hintColorMap[hint]} aspect-square w-24 flex justify-center items-center`}
>
	{letter}
</div>

<style>
</style>
