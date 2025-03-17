<script lang="ts">
  export let border: boolean | undefined = false;
  export let full: boolean | undefined = false;
  export let ghost: boolean | undefined = false;
  export let disabled: boolean | undefined = false;
  export let rounded: 'sm' | 'md' | 'lg' = 'md';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let shadow: boolean | undefined = false;
  export let style: string | undefined = '';
  export let text: string | undefined = '';
  export let type: 'button' | 'submit' | 'reset' | undefined = 'button';
  export let variant: 'primary' | 'secondary' | 'accent' = 'primary';

  export let onClick: ((event: MouseEvent) => void) | undefined = undefined;
</script>

<button
  data-variant={variant}
  data-size={size}
  data-border={border}
  data-rounded={rounded}
  data-shadow={shadow}
  data-ghost={ghost}
  data-full={full}
  on:click={onClick}
  {type}
  {disabled}
  {style}
>
  <slot name="left" />
  {text}
  <slot name="right" />
</button>

<style lang="scss">
  @import '../../style/mixin';
  @import '../../style/variable';
  button {
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &[data-variant='primary'] {
      color: $primary-text;
      background-color: $primary-main;
      &:hover {
        background-color: $primary-hover;
        ::slotted(img) {
          filter: $filter-white;
        }
      }
      &:active {
        background-color: $primary-selected;
        ::slotted(img) {
          filter: $filter-white;
        }
      }
    }

    &[data-variant='secondary'] {
      color: $secondary-text;
      background-color: $secondary-main;
      &:hover {
        background-color: $secondary-hover;
        ::slotted(img) {
          filter: $filter-white;
        }
      }
      &:active {
        background-color: $secondary-selected;
      }
    }

    &[data-variant='accent'] {
      color: $accent-text;
      background-color: $accent-main;

      &:hover {
        background-color: $accent-hover;
      }
      &:active {
        background-color: $accent-selected;
      }
    }

    &[data-size='sm'] {
      font-size: 14px;
      padding: 4px 6px;
      height: 28px;
    }

    &[data-size='md'] {
      font-size: 16px;
      padding: 6px 8px;
      height: 32px;
    }

    &[data-size='lg'] {
      font-size: 20px;
      padding: 10px 12px;
      height: 40px;
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

    &[data-border='true'] {
      &[data-variant='primary'] {
        border: 1.5px solid $primary-border;
      }
      &[data-variant='secondary'] {
        border: 1.5px solid $secondary-border;
      }
      &[data-variant='accent'] {
        border: 1.5px solid $accent-border;
      }
    }

    &[data-shadow='true'] {
      box-shadow: $box-shadow;
    }

    &[data-ghost='true'] {
      background: transparent;

      &[data-variant='primary'] {
        border: 1.5px solid $primary-border;
        color: $primary-main;

        &:hover {
          background: $primary-main;
          color: $primary-text;
        }
      }
      &[data-variant='secondary'] {
        border: 1.5px solid $secondary-border;
        color: $secondary-main;

        &:hover {
          background: $secondary-main;
          color: $secondary-text;
        }
      }
      &[data-variant='accent'] {
        border: 1.5px solid $accent-border;
        color: $accent-main;

        &:hover {
          background: $primary-main;
          color: $primary-text;
        }
      }

      &[data-border='false'] {
        border: none;
      }
    }

    &[data-full='true'] {
      width: 100%;
    }

    &:disabled {
      @include disabled;
    }
  }
</style>
