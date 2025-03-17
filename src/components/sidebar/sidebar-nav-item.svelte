<script lang="ts">
  import { page } from '$app/stores';

  export let title: string;
  export let icon: string;
  export let url: string = '#';
  $: active = $page.url.pathname === url;
</script>

<a href={url} class:active>
  <div><span>{title}</span></div>
  <img src={icon} alt={title} />
  <slot />
</a>

<style lang="scss">
  @import '../../style/variable';
  @import '../../style/mixin';
  a {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $padding-md $padding-md;
    width: 100%;
    color: $text-secondary;

    span {
      font-weight: 600;
      font-size: 16px;
    }

    img {
      width: 20px;
      height: 20px;
      filter: $filter-gray;
    }

    &:hover {
      background: $primary-main;
      border-radius: $rounded-md;

      img {
        filter: $filter-white;
      }

      span {
        color: white;
      }
    }
  }

  .active {
    background: $primary-main;
    border-radius: $rounded-md;

    img {
      filter: $filter-white;
    }

    span {
      color: white;
    }
  }
</style>
