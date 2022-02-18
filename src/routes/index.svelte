<script lang="ts">
	import PoemCreator from '$lib/PoemCreator/PoemCreator.svelte';
</script>

<main>
	<section>
		<h1>Reimemonster</h1>
		<details>
			<summary>Wortvorschläge</summary>
			<div>
				<p>Keine Wortvorschläge vorhanden.</p>
			</div>
		</details>
		<details>
			<summary>Bedienungsanleitung</summary>
			<div>
				<p>Während Du schreibst, siehst Du die Anzahl der Silben am Ende der jeweiligen Zeile.</p>
				<p>Markierst Du ein Wort erscheinen hier Reimvorschläge.</p>
				<p>Dein Gedicht speichert sich automatisch auf dem ausgewählten Slot.</p>
			</div>
		</details>
	</section>
	<a href="/create">Create a poem</a>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding: 2em;
	}

	main > * {
		flex: 1;
	}

	h1 {
		margin: 0;
	}
</style>
