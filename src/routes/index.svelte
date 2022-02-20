<script lang="ts">
	import { base } from '$app/paths';
</script>

<div>
	<section>
		<h1>Reimemonster</h1>
		<details open>
			<summary>Bedienungsanleitung</summary>
			<div>
				<p>Während Du schreibst, siehst Du die Anzahl der Silben am Ende der jeweiligen Zeile.</p>
				<p>Markierst Du ein Wort erscheinen hier Reimvorschläge.</p>
				<p>Dein Gedicht speichert sich automatisch auf dem ausgewählten Slot.</p>
			</div>
		</details>
	</section>
	<a href="{base}/create">Create a poem</a>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding: 2em;
	}

	div > * {
		flex: 1;
	}

	h1 {
		margin: 0;
	}
</style>
