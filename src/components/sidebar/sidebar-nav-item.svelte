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
  @use '../../style/variable';
  @use '../../style/mixin';
  a {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: variable.$padding-md variable.$padding-md;
    width: 100%;
    color: variable.$text-secondary;

    span {
      font-weight: 600;
      font-size: 16px;
    }

    img {
      width: 20px;
      height: 20px;
      filter: variable.$filter-gray;
    }

    &:hover {
      background: variable.$primary-main;
      border-radius: variable.$rounded-md;

      img {
        filter: variable.$filter-white;
      }

      span {
        color: white;
      }
    }
  }

  .active {
    background: variable.$primary-main;
    border-radius: variable.$rounded-md;

    img {
      filter: variable.$filter-white;
    }

    span {
      color: white;
    }
  }
</style>
