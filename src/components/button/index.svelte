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
  @use '../../style/mixin';
  @use '../../style/variable';
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
      color: variable.$primary-text;
      background-color: variable.$primary-main;
      &:hover {
        background-color: variable.$primary-hover;
        ::slotted(img) {
          filter: variable.$filter-white;
        }
      }
      &:active {
        background-color: variable.$primary-selected;
        ::slotted(img) {
          filter: variable.$filter-white;
        }
      }
    }

    &[data-variant='secondary'] {
      color: variable.$secondary-text;
      background-color: variable.$secondary-main;
      &:hover {
        background-color: variable.$secondary-hover;
        ::slotted(img) {
          filter: variable.$filter-white;
        }
      }
      &:active {
        background-color: variable.$secondary-selected;
      }
    }

    &[data-variant='accent'] {
      color: variable.$accent-text;
      background-color: variable.$accent-main;

      &:hover {
        background-color: variable.$accent-hover;
      }
      &:active {
        background-color: variable.$accent-selected;
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
      border-radius: variable.$rounded-sm;
    }

    &[data-rounded='md'] {
      border-radius: variable.$rounded-md;
    }

    &[data-rounded='lg'] {
      border-radius: variable.$rounded-lg;
    }

    &[data-border='true'] {
      &[data-variant='primary'] {
        border: 1.5px solid variable.$primary-border;
      }
      &[data-variant='secondary'] {
        border: 1.5px solid variable.$secondary-border;
      }
      &[data-variant='accent'] {
        border: 1.5px solid variable.$accent-border;
      }
    }

    &[data-shadow='true'] {
      box-shadow: variable.$box-shadow;
    }

    &[data-ghost='true'] {
      background: transparent;

      &[data-variant='primary'] {
        border: 1.5px solid variable.$primary-border;
        color: variable.$primary-main;

        &:hover {
          background: variable.$primary-main;
          color: variable.$primary-text;
        }
      }
      &[data-variant='secondary'] {
        border: 1.5px solid variable.$secondary-border;
        color: variable.$secondary-main;

        &:hover {
          background: variable.$secondary-main;
          color: variable.$secondary-text;
        }
      }
      &[data-variant='accent'] {
        border: 1.5px solid variable.$accent-border;
        color: variable.$accent-main;

        &:hover {
          background: variable.$accent-main;
          color: variable.$accent-text;
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
      @include mixin.disabled;
    }
  }
</style>
