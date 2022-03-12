<script lang="ts">
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';
	import { lastWordTyped, poem, poems } from '$lib/store/poem.store';
	import RhymeSuggestion from '$lib/RhymeSuggestion/RhymeSuggestion.svelte';
	import PoemInput from './PoemInput/PoemInput.svelte';
	import SavePoemButton from './SavePoemButton/SavePoemButton.svelte';

	function loadPoem(event) {
		$poem = event.detail;
		console.log($poem);
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
				<PoemDropdownList on:load={loadPoem} />
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
