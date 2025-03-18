<script lang="ts">
  export let border: boolean | undefined = false;
  export let rounded: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let shadow: boolean | undefined = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let src: string = '';
  export let style: string = '';
</script>

<img
  class="avatar"
  data-border={border}
  data-rounded={rounded}
  data-shadow={shadow}
  data-size={size}
  {src}
  {style}
  alt="avatar"
/>

<style lang="scss">
  @use '../../style/mixin';
  @use '../../style/variable';

  .avatar {
    object-fit: contain;

    &[data-size='sm'] {
      width: 24px;
      height: 24px;
    }

    &[data-size='md'] {
      width: 32px;
      height: 32px;
    }

    &[data-size='lg'] {
      width: 40px;
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
      border: 1.5px solid rgba(0, 0, 0, 0.4);
    }

    &[data-shadow='true'] {
      box-shadow: variable.$box-shadow;
    }
  }
</style>
