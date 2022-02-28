<script lang="ts">
	import Headline from '$lib/Headline/Headline.svelte';
	import { wordRhymeStore } from '$lib/store/poem.store';
	import { onMount } from 'svelte';
	import SuggestionWorker from './worker.ts?worker';

	export let word: string = '';

	let isLoading = true;
	let suggestedWords = [];

	let backgroundWorker: Worker | null = null;
	const timeToWait = 750;
	let timer;
	let debouncedPost: (word: string) => void = (word) => {
		const normalizedWord = word.toLowerCase();
		if ($wordRhymeStore[normalizedWord] === undefined) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				isLoading = true;
				backgroundWorker?.postMessage(normalizedWord);
			}, timeToWait);
		} else {
			suggestedWords = $wordRhymeStore[normalizedWord];
		}
	};

	$: debouncedPost(word);

	onMount(() => {
		const workerListener = (event) => {
			const data = JSON.parse(event.data);
			$wordRhymeStore[data.word] = data.rhymes;
			suggestedWords = $wordRhymeStore[word];
			isLoading = false;
		};

		backgroundWorker = new SuggestionWorker();
		backgroundWorker.addEventListener('message', workerListener);

		return () => {
			backgroundWorker.removeEventListener('message', workerListener);
		};
	});
</script>

<Headline>{word}</Headline>
<div>
	{#if isLoading}
		<span>loading ...</span>
	{:else if suggestedWords}
		<ul>
			{#each suggestedWords as suggestion}
				<li>{suggestion}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
