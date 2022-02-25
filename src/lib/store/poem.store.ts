import { countSyllables } from 'reimemonster';
import { derived, writable } from 'svelte/store';

export const lastWordTyped = writable('');

export const poem = writable('');

export const syllables = derived(poem, (value) => {
	const acc: { syllables: number; okay: boolean }[] = [];
	let previous = 0;
	value
		.trim()
		.split(/\n/)
		.forEach((element) => {
			const syllables = countSyllables(element);
			acc.push({ syllables, okay: previous === 0 || previous === syllables });
			previous = syllables;
		});
	return acc;
});
