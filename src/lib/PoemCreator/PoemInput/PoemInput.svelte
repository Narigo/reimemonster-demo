<script lang="ts">
	import { lastWordTyped, poem, syllables } from '$lib/store/poem.store';
	import { onDestroy } from 'svelte';

	let inputField: HTMLTextAreaElement | null = null;
	let inputIsFocused: boolean = false;
	let text: string = $poem.text;

	const unsubscribe = poem.subscribe((p) => (text = p.text));
	onDestroy(() => {
		unsubscribe();
	});

	function findLastWord(target: EventTarget & HTMLTextAreaElement) {
		const start = text.slice(0, target.selectionStart);
		const end = text.slice(target.selectionEnd);
		const currentWordFront = /\b(\w*)$/.exec(start);
		const currentWordBack = /^(\w*)\b/.exec(end);
		const possibleWord = `${currentWordFront ? currentWordFront[1] : ''}${
			currentWordBack ? currentWordBack[1] : ''
		}`;
		if (possibleWord !== '') {
			$lastWordTyped = possibleWord;
		}
	}

	const onKeyUp: svelte.JSX.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
		findLastWord(e.currentTarget);
	};

	function onBlur() {
		inputIsFocused = false;
		$poem = { ...$poem, text };
	}

	const onFocus: svelte.JSX.FocusEventHandler<HTMLTextAreaElement> = (e) => {
		inputIsFocused = true;
		findLastWord(e.currentTarget);
	};

	function focusInput() {
		if (!inputIsFocused) {
			inputField.focus();
		}
	}
</script>

<div class="poem" on:click={focusInput}>
	<ol class="syllables">
		{#each $syllables as currentLine}
			<li class={currentLine.okay ? 'okay' : 'different'}>
				{currentLine.syllables}
			</li>
		{/each}
	</ol>
	<div class="input-wrapper">
		<textarea
			class="input"
			bind:this={inputField}
			on:blur={onBlur}
			on:focus={onFocus}
			on:keyup={onKeyUp}
			bind:value={text}
		/>
	</div>
	<div class="padding-right" />
</div>

<style>
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
