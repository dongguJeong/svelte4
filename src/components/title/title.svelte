<script lang="ts">

export let title: string;
export let src: string | undefined = undefined;

</script>

<section class="main_title">
    {#if src}
        <img src={src} alt="icon"/>
    {/if}
    <h1>{title}</h1>
</section>

<style lang="scss">
    .main_title{
        display: flex;
        flex-wrap : wrap;
        align-items: center;
        gap : 10px;

        img{
            width : 40px;
            height : 40px;
            padding : 5px;
            border-radius: 5px;
            background: var(--skyblue-gradient);
        }

        h1{
            font-size: 18px;
            font-weight: 700;
            color : rgba(0,0,0,0.7);
        }
}
</style>