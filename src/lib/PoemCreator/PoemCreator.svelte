<script lang="ts">
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';
	import { createPoemStore, poems, POEM_CONTEXT_KEY } from '$lib/store/poem.store';
	import RhymeSuggestion from '$lib/RhymeSuggestion/RhymeSuggestion.svelte';
	import PoemInput from './PoemInput/PoemInput.svelte';
	import SavePoemButton from './SavePoemButton/SavePoemButton.svelte';
	import { setContext } from 'svelte';

	const poemStore = createPoemStore();
	let { lastWordTyped, poem } = poemStore;
	setContext(POEM_CONTEXT_KEY, poemStore);

	function loadPoem(event) {
		$poem = event.detail;
	}

	function removePoem(event) {
		const poem = event.detail;
		const indexOfPoem = $poems.findIndex((p) => p === poem);
		$poems = [...$poems.slice(0, indexOfPoem), ...$poems.slice(indexOfPoem + 1)];
	}

	function savePoem(event) {
		const poem = event.detail;
		$poems = [...$poems, poem];
	}
</script>

<section>
	<PoemTitle>
		<div slot="right">
			<PoemDropdown on:select>
				<PoemDropdownList on:select={loadPoem} on:remove={removePoem} />
			</PoemDropdown>
			<SavePoemButton on:save={savePoem} />
		</div>
	</PoemTitle>
	<PoemInput />
	<RhymeSuggestion word={$lastWordTyped} />
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 2em;
	}

	div {
		align-items: stretch;
		display: flex;
		flex: 0;
		justify-content: center;
	}
</style>
