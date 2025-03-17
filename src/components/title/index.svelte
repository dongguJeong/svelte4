<script lang="ts">
  export let text: string;
  export let size: 'sm' | 'md' | 'lg' | undefined = 'md';
  export let style: string | undefined = '';
  export let color: 'text-primary' | 'text-secondary' | undefined = 'text-primary';
</script>

<div class="title" {style} data-size={size} data-color={color}>
  <slot name="left" />
  {text}
  <slot name="right" />
</div>

<style lang="scss">
  @import '../../style/variable';
  .title {
    display: flex;
    align-items: center;
    color: $text-primary;
    font-weight: 600;

    &[data-size='sm'] {
      font-size: 18px;
    }

    &[data-size='md'] {
      font-size: 24px;
    }

    &[data-size='lg'] {
      font-size: 32px;
    }

    &[data-color='text-primary'] {
      color: $text-primary;
    }

    &[data-color='text-secondary'] {
      color: $text-secondary;
    }
  }
</style>
