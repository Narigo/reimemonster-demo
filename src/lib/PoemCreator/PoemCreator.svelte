<script lang="ts">
	import PoemDropdown from '$lib/PoemDropdown/PoemDropdown.svelte';
	import PoemDropdownList from '$lib/PoemDropdown/PoemDropdownList/PoemDropdownList.svelte';
	import PoemTitle from '$lib/PoemTitle/PoemTitle.svelte';

	let content = '';
</script>

<section>
	<PoemTitle>
		<PoemDropdown slot="right">
			<PoemDropdownList />
		</PoemDropdown>
	</PoemTitle>
	<div contenteditable>{content}</div>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 1em;
	}

	div {
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 2em;
		width: 100%;
	}

	div:focus {
		border: 2px solid rgba(0, 0, 0, 1);
		padding: calc(2em - 1px);
		outline: none;
	}
</style>
