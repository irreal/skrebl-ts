import type { Hint } from './types/hint.type';

export function getDataFromStrings(word: string, hints: Hint[], options: { uppercase: boolean }) {
	if (!word) {
		return [];
	}
	const data = [];
	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		const hint = hints[i];
		const letterDisplay = options.uppercase ? letter.toUpperCase() : letter;
		data.push({
			letter: letterDisplay,
			hint
		});
	}
	return data;
}
