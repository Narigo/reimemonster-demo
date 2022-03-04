import { countSyllables } from 'reimemonster';
import { derived, writable } from 'svelte/store';

export const lastWordTyped = writable('');

export const poem = writable({ title: '', text: '' });

export type Poem = {
	title: string;
	text: string;
};

export const poems = writable<Poem[]>([]);

export const syllables = derived(poem, ({ text }) => {
	const acc: { syllables: number; okay: boolean }[] = [];
	let previous = 0;
	text
		.trim()
		.split(/\n/)
		.forEach((element) => {
			const syllables = countSyllables(element);
			acc.push({ syllables, okay: previous === 0 || previous === syllables });
			previous = syllables;
		});
	return acc;
});

export const wordRhymeStore = writable({});
