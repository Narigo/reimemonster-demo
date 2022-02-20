<script lang="ts">
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';
	import { countSyllables } from 'reimemonster';

	let syllables: { syllables: number; okay: boolean }[] = [];

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
</script>

<section>
	<PoemTitle>
		<PoemDropdown slot="right">
			<PoemDropdownList />
		</PoemDropdown>
	</PoemTitle>
	<div class="poem">
		<div class="input" contenteditable on:input={onInput} />
		<ol class="syllables">
			{#each syllables as currentLine}
				<li class={currentLine.okay ? 'okay' : 'different'}>
					{currentLine.syllables}
				</li>
			{/each}
		</ol>
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
		display: flex;
		flex-direction: row;
		font: var(--poem-content-font);
		letter-spacing: 2px;
		position: relative;
		overflow-x: scroll;
		text-overflow: ellipsis;
	}

	.syllables {
		color: rgba(0, 0, 0, 0.2);
		list-style: none;
		padding: 1em;
		position: absolute;
	}
	.different {
		color: rgba(255, 0, 0, 0.2);
	}

	.input {
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 2em;
		flex: 1;
		overflow-x: scroll;
		text-overflow: ellipsis;
	}

	.input:focus {
		border: 2px solid rgba(0, 0, 0, 1);
		padding: calc(2em - 1px);
		outline: none;
	}
</style>
