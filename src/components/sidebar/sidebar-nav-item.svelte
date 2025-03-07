<script lang="ts">
    import {page} from '$app/stores';

    export let title:string;
    export let icon:string;
    export let url:string = '#';
    $: active = $page.url.pathname === url;
    
</script>

<a href={url} class:active={active}>
    <div><span>{title}</span></div>
    <img src={icon} alt={title}/>
    <slot/>
</a>



<style lang="scss">
     a{
        cursor : pointer;
        list-style: none;
        display : flex;
        align-items: center;
        justify-content: space-between;
        padding : 10px 10px;
        width: 100%;

        span{
            font-weight: 600;
            font-size :16px;
        }

        img{
        width : 20px;
        height : 20px;
        filter: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%) contrast(84%);
        }

        &:hover{
            background : var(--skyblue-gradient);
            border-radius: 5px;
        
            img{
            filter :   invert(100%) sepia(100%) saturate(1%) hue-rotate(213deg) brightness(103%) contrast(101%);
            }
        
            span{
                color : white;
            }

        }
    }

    .active {
        background : var(--skyblue-gradient);
        border-radius: 5px;

        img{
        filter :   invert(100%) sepia(100%) saturate(1%) hue-rotate(213deg) brightness(103%) contrast(101%);
        }

        span{
            color : white;
        }
    }

</style>