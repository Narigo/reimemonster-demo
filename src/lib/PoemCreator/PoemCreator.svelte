<script lang="ts">
	let content = '';
</script>

<div class="root">
	<input type="text" name="title" />
	<div class="poem" contenteditable>{content}</div>
</div>

<style>
	.root {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 1em;
	}

	input[name='title'] {
		font: var(--poem-title-font);
		border: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	input[name='title']:focus {
		border-bottom: 2px solid rgba(0, 0, 0, 1);
		margin-bottom: -1px;
		outline: none;
	}

	.poem {
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 2em;
		width: 100%;
	}

	.poem:focus {
		border: 2px solid rgba(0, 0, 0, 1);
		padding: calc(2em - 1px);
		outline: none;
	}
</style>
