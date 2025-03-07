<script lang="ts">
//     const sidebar = document.querySelector('.sidebar');
// const hamburger = document.querySelector('.hamburger');

// hamburger.addEventListener('click', () => {
    
//     if(sidebar.classList.contains('open')){
//         sidebar.classList.remove('open');
//     }
//     else{
//         sidebar.classList.add('open');
//     };
// });

// const sidebarNavList = document.querySelectorAll('.sidebar_nav li');

// const clickSidebarMenu = (e) => {
    
//     sidebarNavList.forEach((nav) => {
//         nav.classList.remove('active');
//     });
//     e.target.classList.add('active');

// };

// sidebarNavList.forEach((li) => {
//     li.addEventListener('click', clickSidebarMenu);
// });

import SidebarNav from "./sidebar-nav.svelte";
import SidebarProfile from "./sidebar-profile.svelte";
import SidebarButton from "./sidebar-button.svelte";

</script>

<aside class="sidebar">
    <SidebarProfile/>
    <SidebarNav/>
    <SidebarButton title="Add Project"/>
</aside>

<style lang="scss">

  .sidebar{
    display: flex;
    flex-direction: column;
    gap : 20px;
    background: white;
    padding : 60px 40px;
    width : var(--sidebar-width);
    height: 100%;
}

</style>