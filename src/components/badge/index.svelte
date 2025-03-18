<script lang="ts">
  export let border: boolean | undefined = false;
  export let ghost: boolean | undefined = false;
  export let rounded: 'sm' | 'md' | 'lg' = 'md';
  export let shadow: boolean | undefined = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let style: string | undefined = '';
  export let variant: 'primary' | 'secondary' | 'accent' = 'primary';
</script>

<div
  class="badge"
  data-border={border}
  data-ghost={ghost}
  data-rounded={rounded}
  data-shadow={shadow}
  data-size={size}
  data-variant={variant}
  {style}
>
  <slot />
</div>

<style lang="scss">
  @use '../../style/variable';

  .badge {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;

    &[data-variant='primary'] {
      color: variable.$primary-text;
      background-color: variable.$primary-main;
    }

    &[data-variant='secondary'] {
      color: variable.$secondary-text;
      background-color: variable.$secondary-main;
    }

    &[data-variant='accent'] {
      color: variable.$accent-text;
      background-color: variable.$accent-main;
    }

    &[data-size='sm'] {
      height: 4px;
      width: 4px;
      padding: 2px;
    }

    &[data-size='md'] {
      height: 10px;
      height: 10px;
    }

    &[data-size='lg'] {
      height: 20px;
      padding: 20px;
    }

    &[data-border='true'] {
      &[data-variant='primary'] {
        border: 1px solid variable.$primary-border;
      }
      &[data-variant='secondary'] {
        border: 1px solid variable.$secondary-border;
      }
      &[data-variant='accent'] {
        border: 1px solid variable.$accent-border;
      }
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

    &[data-ghost='true'] {
      background: transparent;
    }

    &[data-shadow='true'] {
      box-shadow: variable.$box-shadow;
    }
  }
</style>
