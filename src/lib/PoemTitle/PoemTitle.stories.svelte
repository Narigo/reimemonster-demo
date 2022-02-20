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

<Template id="left-and-right" let:args>
	<PoemTitle {...args}>
		<div slot="left">left</div>
		<div slot="right">right</div>
	</PoemTitle>
</Template>

<Template id="with-gap" let:args>
	<div style="--poem-title-gap: 2em;">
		<PoemTitle {...args}>
			<div slot="left">left</div>
			<div slot="right">right</div>
		</PoemTitle>
	</div>
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

<Story
	name="Left and Right"
	template="left-and-right"
	args={{
		value: ''
	}}
/>

<Story
	name="With gap"
	template="with-gap"
	args={{
		value: ''
	}}
/>
