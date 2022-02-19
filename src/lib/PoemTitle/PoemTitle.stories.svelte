<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import PoemTitle from './PoemTitle.svelte';
</script>

<Meta title="Components/PoemTitle" component={PoemTitle} />

<Template let:args>
	<PoemTitle {...args} />
</Template>

<Template id="left" let:args>
	<PoemTitle {...args}>
		<div slot="left">left</div>
	</PoemTitle>
</Template>

<Template id="right" let:args>
	<PoemTitle {...args}>
		<div slot="right">right</div>
	</PoemTitle>
</Template>

<Story
	name="Regular"
	args={{
		value: ''
	}}
/>

<Story
	name="Prefilled"
	args={{
		value: 'This is a prefilled Title'
	}}
/>

<Story
	name="Left"
	template="left"
	args={{
		value: ''
	}}
/>

<Story
	name="Right"
	template="right"
	args={{
		value: ''
	}}
/>
