<script lang="ts">
	import { poem } from '$lib/store/poem.store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function savePoem() {
		dispatch('save', $poem);
	}
</script>

<button type="button" on:click={savePoem}><span>+</span></button>

<style>
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
