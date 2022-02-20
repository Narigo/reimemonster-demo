<script>
	import PoemCreator from '$lib/PoemCreator/PoemCreator.svelte';
</script>

<main>
	<PoemCreator />
	<a href="/">Back to index</a>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 2em;
		margin: 0 auto;
		max-width: 800px;
		padding: 32px;
	}
</style>
