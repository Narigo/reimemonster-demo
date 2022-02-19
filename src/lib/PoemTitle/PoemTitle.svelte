<script lang="ts">
	export let value: string = '';
</script>

<div>
	<slot name="left" />
	<input type="text" name="title" bind:value on:blur on:change on:focus />
	<slot name="right" />
</div>

<style>
	:root {
		--poem-title-gap: 0;
	}

	div {
		display: flex;
		position: relative;
		gap: var(--poem-title-gap);
	}

	input[name='title'] {
		flex: 1;
		font: var(--poem-title-font);
		border: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		width: 100%;
	}

	input[name='title']:focus {
		border-bottom: 2px solid rgba(0, 0, 0, 1);
		margin-bottom: -1px;
		outline: none;
	}
</style>
