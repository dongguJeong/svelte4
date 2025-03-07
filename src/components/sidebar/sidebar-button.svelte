<script lang="ts">
    export let title:string;
</script>

<button class="sidebar_button">{title}</button>

<style lang="scss">
    .sidebar_button{
        margin : 0 4px;
        color : white;
        font-size : 16px;
        background: var(--skyblue-gradient);
        border : none;
        border-radius: 5px;
        padding : 14px 0px;
    }

</style>