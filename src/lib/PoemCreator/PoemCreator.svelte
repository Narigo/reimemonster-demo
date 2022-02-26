<script lang="ts">
	import { onMount } from 'svelte';
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';
	import { lastWordTyped, poem, syllables } from '$lib/store/poem.store';
	import RhymeSuggestion from '$lib/RhymeSuggestion/RhymeSuggestion.svelte';

	let inputField: HTMLDivElement | null = null;
	let inputIsFocused: boolean = false;

	onMount(() => {
		console.log({ inputField, type: typeof inputField });
	});

	function findLastWord() {
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);
		const textNode = range.commonAncestorContainer;
		if (textNode.parentNode === inputField) {
			const text = textNode.textContent;
			const start = text.slice(0, range.startOffset);
			const end = text.slice(range.startOffset);
			const currentWordFront = /\b(\w*)$/.exec(start);
			const currentWordBack = /^(\w*)\b/.exec(end);
			$lastWordTyped = `${currentWordFront ? currentWordFront[1] : ''}${
				currentWordBack ? currentWordBack[1] : ''
			}`;
		}
	}

	const onKeyUp: svelte.JSX.KeyboardEventHandler<HTMLDivElement> = (e) => {
		$poem = inputField.innerText;
		findLastWord();
	};

	function onBlur() {
		inputIsFocused = false;
	}

	function onFocus() {
		inputIsFocused = true;
		findLastWord();
	}

	function focusInput() {
		if (!inputIsFocused) {
			inputField.focus();
		}
	}
</script>

<section>
	<PoemTitle>
		<PoemDropdown slot="right">
			<PoemDropdownList />
		</PoemDropdown>
	</PoemTitle>
	<div class="poem" on:click={focusInput}>
		<ol class="syllables">
			{#each $syllables as currentLine}
				<li class={currentLine.okay ? 'okay' : 'different'}>
					{currentLine.syllables}
				</li>
			{/each}
		</ol>
		<div class="input-wrapper">
			<div
				class="input"
				contenteditable
				bind:this={inputField}
				on:blur={onBlur}
				on:focus={onFocus}
				on:keyup={onKeyUp}
			/>
		</div>
		<div class="padding-right" />
	</div>
	<RhymeSuggestion word={$lastWordTyped} />
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
		border: 0;
		flex: 1 0 auto;
		font: var(--poem-content-font);
		letter-spacing: 2px;
		overflow: hidden;
		white-space: nowrap;
	}

	.input:focus {
		outline: none;
	}
</style>
