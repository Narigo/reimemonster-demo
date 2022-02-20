<script>
	import MainNavigation from '$lib/MainNavigation/MainNavigation.svelte';
</script>

<MainNavigation />

<slot />

<style>
	:root {
		--background-color: #fff;
		--page-width: 800px;
		--poem-title-font: small-caps 20px/1.7 Merriweather;
		--poem-content-font: 24px/1.7 'Loved by the King';
		--default-font: 16px/1.5 Merriweather;
	}

	:global(html, body) {
		box-sizing: border-box;
		font: var(--default-font);
		margin: 0;
		min-height: 100%;
		padding: 0;
	}

	:global(*, *:before, *:after) {
		box-sizing: border-box;
	}
</style>
