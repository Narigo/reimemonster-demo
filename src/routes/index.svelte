<script lang="ts">
	import PoemCreator from '$lib/PoemCreator/PoemCreator.svelte';
</script>

<main>
	<PoemCreator />
	<h1>Reimemonster</h1>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		gap: 2em;
		padding: 2em;
	}

	main > * {
		flex: 1;
	}
</style>
