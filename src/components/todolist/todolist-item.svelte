<script lang="ts">
  import type { ChangeEventHandler } from 'svelte/elements';
  import { Button } from '../button';
  import { Checkbox } from '../checkbox';
  import { TextInput } from '../text-Input';

  export let id: string = '';
  export let checked: boolean = false;
  export let text: string = '';
  export let subText: string = '';
  export let onCheck: ((e: MouseEvent) => void) | undefined = undefined;
  export let onDelete: ((e: MouseEvent) => void) | null | undefined = undefined;
  export let onChange: ChangeEventHandler<HTMLInputElement> | null | undefined = undefined;
</script>

<li {id}>
  <div>
    <Checkbox onClick={onCheck} {checked} size="md" />
    {#if onChange}
      <TextInput value={text} {onChange} style="width : 70%;" />
    {:else}
      <TextInput value={text} style="width : 70%;" />
    {/if}
    <span>{checked ? subText : ''}</span>
  </div>
  {#if onDelete}
    <Button onClick={onDelete} ghost={true} text="🗑️" />
  {/if}
</li>

<style lang="scss">
  @use '../../style/variable';
  li {
    width: 100%;
    display: flex;
    align-items: center;

    div {
      display: flex;
      width: 100%;
      align-items: center;

      span {
        font-size: 14px;
        color: variable.$text-secondary;
      }
    }
  }
</style>
