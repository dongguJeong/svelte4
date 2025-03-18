<script lang="ts">
  export let style: string = '';
  export let title;
</script>

<div class="header_title" {style}>
  <a href="/">{title}</a>
</div>

<style lang="scss">
  @use '../../style/variable';
  @use '../../style/mixin';

  .header_title {
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    a {
      font-size: 1.5rem;
      color: variable.$primary-main;
      font-weight: 800;
    }
  }

  @include mixin.screen-md {
    .header_title {
      width: 180px;
    }
  }
</style>
