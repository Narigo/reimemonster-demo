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
			<button type="button"><span>+</span></button>
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

	button {
		align-items: center;
		background-color: var(--background-color);
		border: 1px solid rgba(0, 0, 0, 0.2);
		display: flex;
		font: var(--poem-title-font);
		justify-content: center;
		margin: 0;
		padding: 0;
		height: 2em;
		width: 2em;
	}
	button:focus {
		border: 2px solid #000;
		outline: none;
	}
	span {
		width: 2em;
	}
</style>
