<script>
	import PoemCreator from '$lib/PoemCreator/PoemCreator.svelte';
</script>

<main>
	<PoemCreator />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 2em;
		margin: 0 auto;
		max-width: var(--page-width);
		padding: 2em;
	}
</style>
