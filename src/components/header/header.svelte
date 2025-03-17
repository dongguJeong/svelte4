<script lang="ts">
  import HeaderTitle from './header-title.svelte';
  import { Button } from '../button';
  import { open } from '../../store/sidebar-store';
  import type { IButton } from '.';
  import { Badge } from '../badge';
  import { Avatar } from '../avatar';
  import { SearchBar } from '../searchbar';
  import { goto } from '$app/navigation';

  const toggleSidebar = () => {
    open.update((value) => !value);
  };

  const Buttons: IButton[] = [
    {
      src: '/svg/mail.svg',
      alt: 'mail',
      badge: true
    },
    {
      src: '/svg/bell.svg',
      alt: 'bell',
      badge: true
    },
    {
      src: '/svg/hamburger.svg',
      alt: 'hamburger',
      badge: false,
      onClick: () => {
        toggleSidebar();
      }
    }
  ];

  const onSubmit = (e: Event) => {
    e.preventDefault();
    const newText = e.target.elements[0].value;

    if (!newText) return;
    goto(`/search/${newText}`);
    e.target.elements[0].value = '';
  };
</script>

<header class="header">
  <HeaderTitle title="blueBox" />
  <div class="header_right">
    <SearchBar size="md" {onSubmit} placeholder="search" style="width : 30%; gap : 10px;">
      <img slot="left" class="search_icon" src="/svg/magnifying.svg" alt="search" />
    </SearchBar>

    <div class="header_buttons">
      <div class="header_button_profile">
        <Button ghost={true} text="정동구">
          <Avatar
            src="/svg/picachu.png"
            border={true}
            size="md"
            rounded="lg"
            slot="left"
            style="margin-right : 20px;"
          />
          <img
            slot="right"
            src="/svg/triangle.svg"
            alt="triangle"
            class="header_button_profile_right_icon"
          />
        </Button>
      </div>

      {#each Buttons as { src, alt, badge, onClick }, i}
        <Button ghost={true} style="position : relative;" {onClick}>
          {#if badge}
            <Badge variant="accent" />
          {/if}
          <img slot="left" class="header__buttons_image" {src} {alt} />
        </Button>
      {/each}
    </div>
  </div>
</header>

<style lang="scss">
  @import '../../style/mixin';
  .header {
    display: flex;
    align-items: center;
    background: #fff;
    width: 100%;
    padding-right: 40px;
    gap: 80px;
  }

  .header_right {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .search_icon {
      width: 18px;
      height: 18px;
      filter: $filter-gray;
    }

    .header_buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: $text-secondary;

      .header_button_profile_right_icon {
        margin-right: 20px;
      }

      img {
        width: 20px;
        height: 20px;
        filter: $filter-gray;

        &:hover {
          filter: filter-primary;
        }
      }
    }
  }

  @include screen-md {
    .header {
      gap: 0px;

      .header_buttons {
        gap: 10px;
      }

      .profile_right_icon {
        margin-right: 10px;
      }
    }
  }

  @include screen-sm {
    .header_button_profile {
      display: none;
    }
  }
</style>
