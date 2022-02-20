<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<ul>
			<li><a href="{base}/">Über</a></li>
			<li><a href="{base}/create">Gedicht schreiben</a></li>
			<li><a href="{base}/imprint">Impressum</a></li>
		</ul>
	</nav>
</header>

<style>
	nav {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	ul {
		display: flex;
		justify-content: space-between;
		list-style-type: none;
		margin: 0 auto;
		max-width: var(--page-width);
		padding: 2em;
	}
</style>
