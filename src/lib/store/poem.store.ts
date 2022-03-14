import { browser } from '$app/env';
import { countSyllables } from 'reimemonster';
import { derived, get, Writable, writable } from 'svelte/store';

export const lastWordTyped = writable('');

export type Poem = {
	title: string;
	text: string;
};

export const poems: Writable<Poem[]> = (function () {
	const key = 'poems';
	const internalStore = writable<Poem[]>([]);

	const setter = (value: Poem[]) => {
		if (browser) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
		return internalStore.set(value);
	};

	const subscribe = internalStore.subscribe;

	try {
		if (browser) {
			const initialValue = JSON.parse(window.localStorage.getItem(key) || '[]');
			console.log({ initialValue });
			setter(initialValue);
		}
	} catch {
		// can't parse local storage -> keep empty array
	}

	return {
		set: setter,
		subscribe,
		update(updater) {
			const value = updater(get(internalStore));
			console.log('updated called');
			return setter(value);
		}
	};
})();

export const poem = writable({ title: '', text: '' });

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