<script lang="ts">

import SidebarNavItem from "./sidebar-nav-item.svelte";


interface ISidebarNavItem{
    title : string;
    icon : string;
    url : string;
}

const SIDEBAR_ITEMS:ISidebarNavItem[] = [
    {
        title : 'Dashboard',
        icon : '/svg/home.svg',
        url : '/',
    },
    {
        title : 'TodoList',
        icon : '/svg/table.svg',
        url : '/todolist',
    },
    {
        title : 'UI Elements',
        icon : '/svg/tools.svg',  
        url : '#', 
    },
    {
        title : 'Components',
        icon : '/svg/components.svg', 
        url : '#', 
    },
    {
        title : 'Forms Stuff',
        icon : '/svg/input.svg',   
        url : '#', 
    },
    {
        title : 'Icons',
        icon : '/svg/icons.svg', 
        url : '#',  
    },
    {
        title : 'Sample Page',
        icon : '/svg/desktop.svg',
        url : '#', 
    },
    {
        title : 'Extra',
        icon : '/svg/file.svg',
        url : '#', 
    }

];

</script>

<nav>
    {#each SIDEBAR_ITEMS as item}
        <SidebarNavItem title={item.title} icon={item.icon} url={item.url}/>
    {/each}
</nav>

<style lang="scss">
    nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap : 10px;
        color : var(--gray);
    }
</style>
