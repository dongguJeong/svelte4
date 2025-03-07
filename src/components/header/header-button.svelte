<script lang="ts">
    export let badge: boolean = false;

</script>

<button>
    <slot/>
    {#if badge}
        <div class="badge"></div>
    {/if}
</button>

<style lang="scss">
    
        button{
            cursor : pointer;
            position : relative;
            border: none;
            background-color: transparent;

            img{
                width : 20px;
                height: 20px;
                filter: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%) contrast(84%);
            }
        }

        button:hover img{
            filter : invert(65%) sepia(86%) saturate(259%) hue-rotate(150deg) brightness(83%) contrast(98%);
        }
    

    .badge{
        width : 4px;
        height : 4px;
        border-radius: 50%;
        background-color : #B87DBC;
        position : absolute;
        top : -2px;
        right : 4px;
        z-index: 10;
    }

</style>