<script>
	import { Button } from '../../components/button';
	import { TextInput } from '../../components/text-Input';
</script>

<div class="test" style="background-color : white;">
	<Button variant="primary" size="md" text="button" />
	<Button variant="secondary" size="md" text="button" />
	<Button variant="accent" size="md" text="button" />

	<Button variant="primary" size="md" rounded="sm" text="button" />
	<Button variant="primary" size="md" rounded="md" text="button" />
	<Button variant="primary" size="md" rounded="lg" text="button" />

	<Button variant="primary" size="md" rounded="md" text="button" />
	<Button variant="primary" size="md" rounded="md" ghost={true} text="button" />
	<Button variant="primary" size="md" rounded="md" ghost={true} border={true} text="button" />

	<Button variant="primary" size="sm" rounded="md" border={true} text="button" />
	<Button variant="primary" size="md" rounded="md" border={true} text="button" />
	<Button variant="primary" size="lg" rounded="md" border={true} text="button" />
</div>

<div class="test">
	<TextInput size="sm" placeholder="text" />
	<TextInput size="md" placeholder="text" />
	<TextInput size="lg" placeholder="text" />
	<TextInput size="md" placeholder="text" border={true} />
	<TextInput size="md" placeholder="text" border={true} variant="secondary" />
	<TextInput size="md" placeholder="text" border={true} variant="accent" />
	<TextInput size="md" placeholder="text" disabled />
</div>

<style lang="scss">
	.test {
		border: 1px solid black;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		background-color: white;
		padding: 20px;
	}
</style>
