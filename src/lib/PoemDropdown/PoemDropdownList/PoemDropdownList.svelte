<script lang="ts">
	import { poems } from '$lib/store/poem.store';
</script>

<ul>
	<li><button type="button">Save poem</button></li>
	{#each $poems as poem}
		<li><button type="button">{poem.title}</button></li>
	{:else}
		<li>No saved poems found!</li>
	{/each}
</ul>

<style>
	ul {
		background-color: var(--background-color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 1em;
		position: absolute;
		left: 0;
		right: 0;
		top: 2em;
		z-index: 1;
	}
</style>
