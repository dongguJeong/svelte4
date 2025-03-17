<script lang="ts">
  import { onMount } from 'svelte';

  export let variant: 'primary' | 'secondary' | 'accent' | undefined = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let border: boolean | undefined = false;
  export let rounded: 'sm' | 'md' | 'lg' | 'none' | undefined = 'none';
  export let shadow: boolean | undefined = false;
  export let ghost: boolean | undefined = false;
  export let disabled: boolean | undefined = false;
  export let value: string | undefined = '';
  export let placeholder: string | undefined = '';
  export let type: 'text' | 'password' = 'text';
  export let required: boolean | undefined = false;
  export let full: boolean | undefined = false;
  export let style: string | undefined = '';

  export let onInput: ((e: any) => void) | undefined = undefined;
  export let onSubmit: ((e: any) => void) | undefined = undefined;

  let inputElement: HTMLInputElement;
  onMount(() => {
    if (inputElement) {
      inputElement.type = type;
    }
  });
</script>

<form
  on:submit={onSubmit}
  data-variant={variant}
  data-size={size}
  data-border={border}
  data-rounded={rounded}
  data-shadow={shadow}
  data-ghost={ghost}
  data-full={full}
  data-disabled={disabled}
  {style}
>
  <slot name="left" />
  <input
    data-size={size}
    bind:value
    bind:this={inputElement}
    {disabled}
    {required}
    {placeholder}
    on:input={onInput}
  />
  <slot name="right" />
</form>

<style lang="scss">
  @import '../../style/mixin';
  @import '../../style/variable';

  form {
    display: flex;
    align-items: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.23);

    &[data-border='true'] {
      outline: 1.5px solid rgba(0, 0, 0, 0.23);
    }

    &[data-variant='primary'] {
      &[data-border='true']:focus-within {
        border: 2px solid $primary-focus;
      }
      &[data-border='false']:focus-within {
        border-bottom: 2px solid $primary-focus;
      }
    }

    &[data-variant='secondary'] {
      &[data-border='true']:focus-within {
        border: 2px solid $secondary-focus;
      }
      &[data-border='false']:focus-within {
        border-bottom: 2px solid $secondary-focus;
      }
    }

    &[data-variant='accent'] {
      &[data-border='true']:focus-within {
        border: 2px solid $accent-focus;
      }
      &[data-border='false']:focus-within {
        border-bottom: 2px solid $accent-focus;
      }
    }

    &[data-size='sm'] {
      font-size: 14px;
      padding: 4px 10px;
      height: 30px;
    }

    &[data-size='md'] {
      padding: 6px 12px;
      height: 34px;
    }

    &[data-size='lg'] {
      font-size: 24px;
      padding: 12px 16px;
      height: 48px;
    }

    &[data-rounded='sm'] {
      border-radius: $rounded-sm;
    }

    &[data-rounded='md'] {
      border-radius: $rounded-md;
    }
    &[data-rounded='lg'] {
      border-radius: $rounded-lg;
    }

    &[data-shadow='true'] {
      box-shadow: $box-shadow;
    }

    &[data-ghost='true'] {
      background: transparent;
    }

    &[data-full='true'] {
      width: 100%;
    }

    &[data-disabled='true'] {
      @include disabled;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: transparent;
      color: $text-primary;

      &::placeholder {
        opacity: 0.5;
      }

      &[data-size='sm'] {
        font-size: 14px;

        height: 30px;
      }
      &[data-size='md'] {
        font-size: 16px;
      }

      &[data-size='lg'] {
        font-size: 24px;
      }
    }
  }
</style>
