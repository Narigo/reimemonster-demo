<script lang="ts">
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';
	import { countSyllables } from 'reimemonster';

	let syllables: { syllables: number; okay: boolean }[] = [];
	let inputField;

	function onInput(e) {
		let acc = [];
		let previous = 0;
		e.target.innerText
			.trim()
			.split(/\n/)
			.forEach((element) => {
				const syllables = countSyllables(element);
				acc.push({ syllables, okay: previous === 0 || previous === syllables });
				previous = syllables;
			});
		syllables = acc;
	}

	function focusInput() {
		inputField.focus();
	}
</script>

<section>
	<PoemTitle>
		<PoemDropdown slot="right">
			<PoemDropdownList />
		</PoemDropdown>
	</PoemTitle>
	<div class="poem" on:focus={focusInput}>
		<ol class="syllables">
			{#each syllables as currentLine}
				<li class={currentLine.okay ? 'okay' : 'different'}>
					{currentLine.syllables}
				</li>
			{/each}
		</ol>
		<div class="input-wrapper">
			<div class="input" contenteditable on:input={onInput} bind:this={inputField} />
		</div>
		<div class="padding-right" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 2em;
	}

	.poem {
		display: grid;
		grid-template-columns: 2em 1fr 2em;
		font: var(--poem-content-font);
		letter-spacing: 2px;
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 2em 1px;
	}

	.poem:focus-within {
		border: 2px solid rgba(0, 0, 0, 1);
		padding: calc(2em - 1px) 0 calc(2em - 1px) 0;
		outline: none;
	}

	.syllables {
		align-items: center;
		background-color: white;
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		color: rgba(0, 0, 0, 0.2);
		list-style: none;
		margin: 0;
		padding: 0;
		width: 2em;
	}

	.syllables li {
		margin: 0;
		text-align: center;
	}

	.different {
		color: rgba(255, 51, 34, 0.4);
	}

	.padding-right {
		flex: 0 0 auto;
		width: 2em;
	}

	.input-wrapper {
		display: flex;
		overflow-x: auto;
	}

	.input {
		flex: 1 0 auto;
	}

	.input:focus {
		outline: none;
	}
</style>
