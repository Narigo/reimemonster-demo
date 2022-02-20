<script lang="ts">
	import { base } from '$app/paths';
	import Poem from '$lib/Poem/Poem.svelte';

	const poem = `Lorem ipsum, schieß mich tot,
Blindtext ist wie trocken Brot,
Lies es nicht und denk nicht dran,
Dolor sit, lesen ich kann.

Arcu felis bibendum,
vieles Schreiben machen dumm
Ut enim genug ist's nun,
Stift weg und was and'res tun.`;
	const poemAuthor = 'Jörn';
</script>

<main>
	<section>
		<h1>Reimemonster</h1>
		<div class="slogan">Einfacher Gedichte schreiben.</div>
	</section>
	<section>
		<h2>Bedienungsanleitung</h2>
		<div>
			<p>Während Du schreibst, siehst Du die Anzahl der Silben am Ende der jeweiligen Zeile.</p>
			<p>Markierst Du ein Wort, erscheinen Reimvorschläge.</p>
			<p>Dein Gedicht speichert sich automatisch auf dem ausgewählten Slot.</p>
		</div>
	</section>
	<section>
		<h2>Beispiele</h2>
		<div>
			<Poem content={poem} author={poemAuthor} />
		</div>
	</section>
	<a href="{base}/create">Erstelle selbst ein Gedicht!</a>
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

	main > * {
		flex: 1;
	}

	h1 {
		margin: 0;
	}

	.slogan {
		border-left: 4px solid rgba(0, 0, 0, 0.2);
		font-style: italic;
		margin-left: 2em;
		padding-left: 0.5em;
	}
</style>
