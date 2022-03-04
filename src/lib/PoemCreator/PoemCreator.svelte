<script lang="ts">
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';
	import { lastWordTyped } from '$lib/store/poem.store';
	import RhymeSuggestion from '$lib/RhymeSuggestion/RhymeSuggestion.svelte';
	import PoemInput from './PoemInput/PoemInput.svelte';
</script>

<section>
	<PoemTitle>
		<div slot="right">
			<PoemDropdown>
				<PoemDropdownList />
			</PoemDropdown>
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
</style>
