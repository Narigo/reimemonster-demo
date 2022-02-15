<script lang="ts">
	import Poem from '$lib/Poem/Poem.svelte';
</script>

<main>
	<Poem />
	<h1>Reimemonster</h1>
</main>

<style>
	main {
		display: flex;
	}
	main > * {
		flex: 1;
	}
</style>
