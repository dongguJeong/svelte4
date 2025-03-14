<script lang="ts">
	import { Button } from '../button';
	import { Checkbox } from '../checkbox';
	import { TextInput } from '../text-Input';

	export let checked: boolean = false;
	export let text: string = '';
	export let onCheck: ((e: any) => void) | undefined = undefined;
	export let onChange: ((e: any) => void) | undefined = undefined;
	export let onDelete: ((e: any) => void) | undefined = undefined;
	export let onKeydown: ((e: any) => void) | undefined = undefined;
	export let id = '';

	const koreaDate = (date: string) => {
		const newDate = new Date(Number(date));
		const month = newDate.getMonth() + 1;
		const day = newDate.getDate();
		const hour = newDate.getHours();
		const minute = newDate.getMinutes();
		return `${month}월 ${day}일 ${hour}시 ${minute}분`;
	};
</script>

<li {id}>
	<Checkbox on:click={onCheck} {checked} size="md" />
	<TextInput bind:value={text} {onChange} {onKeydown} full={true} />
	<span class:checked>{koreaDate(id)}</span>
	<Button onClick={onDelete} ghost={true} text="🗑️" />
</li>

<style lang="scss">
	li {
		display: flex;
		align-items: center;
		position: relative;
		cursor: pointer;
		width: 100%;
		gap: 10px;

		span {
			font-size: 12px;
			color: var(--gray);

			&.checked {
				text-decoration: line-through;
			}
		}
	}
</style>
