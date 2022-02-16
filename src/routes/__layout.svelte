<slot />

<style>
	:root {
		--poem-title-font: sans-serif;
	}

	:global(html, body) {
		margin: 0;
		min-height: 100%;
		padding: 0;
	}

	:global(html) {
		box-sizing: border-box;
	}

	:global(*, *:before, *:after) {
		box-sizing: inherit;
	}
</style>
