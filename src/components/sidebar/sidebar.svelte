<script lang="ts">
  import { open } from '../../store/sidebar-store';
  import { Avatar } from '../avatar';
  import { Button } from '../button';
  import type { ISidebarNavItem } from '.';
  import SidebarNavItem from './sidebar-nav-item.svelte';

  const isOpen = open;

  const SIDEBAR_ITEMS: ISidebarNavItem[] = [
    {
      title: 'Dashboard',
      icon: '/svg/home.svg',
      url: '/'
    },
    {
      title: 'TodoList',
      icon: '/svg/table.svg',
      url: '/todolist'
    },
    {
      title: 'UI Elements',
      icon: '/svg/tools.svg',
      url: '#'
    },
    {
      title: 'Components',
      icon: '/svg/components.svg',
      url: '/component'
    },
    {
      title: 'Forms Stuff',
      icon: '/svg/input.svg',
      url: '#'
    },
    {
      title: 'Icons',
      icon: '/svg/icons.svg',
      url: '#'
    },
    {
      title: 'Sample Page',
      icon: '/svg/desktop.svg',
      url: '#'
    },
    {
      title: 'Extra',
      icon: '/svg/file.svg',
      url: '#'
    }
  ];
</script>

<aside class="sidebar" class:open={$isOpen}>
  <div class="sidebar_profile">
    <Avatar src="/svg/picachu.png" border={true} size="md" rounded="lg" />
    <div>
      <span>정동구</span>
      <span>fronend developer</span>
    </div>
  </div>

  <nav class:open={$isOpen}>
    {#each SIDEBAR_ITEMS as item}
      <SidebarNavItem title={item.title} icon={item.icon} url={item.url} />
    {/each}
  </nav>

  <Button variant="primary" size="lg" text="Add Project" />
</aside>

<style lang="scss">
  @use '../../style/variable';
  @use '../../style/mixin';
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: white;
    padding: 60px 40px;
    width: variable.$sidebar-width;
    height: 100%;

    .sidebar_profile {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-left: 10px;

      div {
        display: flex;
        flex-direction: column;

        span:nth-child(2) {
          color: variable.$text-secondary;
          font-size: 14px;
        }
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: variable.$text-secondary;
    }
  }

  @include mixin.screen-md {
    .sidebar {
      position: fixed;
      left: -100%;
      top: 0;
      transition: left 0.3s;
      z-index: 1000;

      &.open {
        left: 0;
      }
    }
  }
</style>
