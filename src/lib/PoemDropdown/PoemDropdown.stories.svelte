<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import PoemDropdown from './PoemDropdown.svelte';
	import PoemDropdownList from './PoemDropdownList/PoemDropdownList.svelte';
</script>

<Meta title="Components/PoemDropdown" component={PoemDropdown} />

<Template let:args>
	<div style="position: relative">
		<PoemDropdown {...args}>
			<PoemDropdownList />
		</PoemDropdown>
	</div>
</Template>

<Story name="Regular" />

<Story name="Opened" args={{ open: true }} />
