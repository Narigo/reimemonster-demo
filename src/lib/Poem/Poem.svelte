<script lang="ts">
	export let author: string = '';
	export let content: string = '';
</script>

<blockquote>
	<pre>{content}</pre>
	<cite>{author}</cite>
</blockquote>

<style>
	blockquote {
		border-left: 4px solid rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding-bottom: 1em;
	}
	cite {
		padding: 0 1em;
	}
	pre {
		background-color: rgba(0, 0, 0, 0.05);
		font: var(--poem-content-font);
		margin: 0;
		padding: 0 2em;
	}
</style>
