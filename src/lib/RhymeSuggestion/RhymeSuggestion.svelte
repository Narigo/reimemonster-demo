<script lang="ts">
	import Headline from '$lib/Headline/Headline.svelte';
	import LoadingIpsum from '$lib/LoadingIpsum/LoadingIpsum.svelte';
	import { wordRhymeStore } from '$lib/store/poem.store';
	import { onMount } from 'svelte';
	import SuggestionWorker from './worker.ts?worker';

	export let word = '';

	let isLoading = false;
	let suggestedWords = null;

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

	$: {
		if (word !== '') {
			debouncedPost(word);
		}
	}

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
		<LoadingIpsum />
	{:else if suggestedWords}
		<ul>
			{#each suggestedWords as suggestion}
				<li>{suggestion}</li>
			{:else}
				<li>Keine Wortvorschläge gefunden!</li>
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
