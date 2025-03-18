<script lang="ts">
  export let border: boolean | undefined = false;
  export let checked: boolean = false;
  export let disabled: boolean = false;
  export let ghost: boolean | undefined = false;
  export let rounded: 'sm' | 'md' | 'lg' = 'md';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let shadow: boolean | undefined = false;
  export let style: string = '';
  export let onClick: ((event: MouseEvent) => void) | undefined = undefined;
</script>

<input
  type="checkbox"
  bind:checked
  data-size={size}
  data-border={border}
  data-rounded={rounded}
  data-shadow={shadow}
  data-ghost={ghost}
  on:click={onClick}
  {disabled}
  {style}
/>

<style lang="scss">
  @use '/src/style/variable';

  input {
    accent-color: variable.$secondary-main;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &[data-size='sm'] {
      width: 16px;
      height: 16px;
    }

    &[data-size='md'] {
      width: 24px;
      height: 24px;
    }

    &[data-size='lg'] {
      width: 32px;
      height: 32px;
    }

    &[data-border='none'] {
      border: none;
    }

    &[data-ghost='true'] {
      background: transparent;
    }
  }
</style>
