<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import PoemDropdown from './PoemDropdown.svelte';
</script>

<Meta title="Components/PoemDropdown" component={PoemDropdown} />

<Template let:args>
	<div style="position: relative">
		<PoemDropdown />
	</div>
</Template>

<Story name="Regular" />
