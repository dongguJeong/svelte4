<script lang="ts">
    export let title:string;
    export let icon:string;
    export let number:number;
    export let increased:number;
    export let bg_gradient:string;

</script>
    <div class="main_card {bg_gradient}">
        <div>
            <img src={icon} alt="chart"/>
            <div class="main_card_title">{title}</div>
            <div class="main_card_number">${number}</div>
        </div>
        <div class="main_card_increased">
            Increased by {increased}%
        </div>
    </div>

<style lang="scss">
    
    .blue_gradient{
        background: var(--blue-gradient);
    }

    .purple_gradient{
        background: var(--purple-gradient);
    }
    .orange_gradient{
        background: var(--orange-gradient);
    }


.main_card{
    border-radius: 10px;
    color : white;
    box-shadow: var(--box-shadow);
    padding : 30px 20px;

    img {
        width : 25px;
        height : 25px;
        filter: invert(99%) sepia(87%) saturate(2%) hue-rotate(122deg) brightness(117%) contrast(100%);
        margin-bottom : 20px;
    }

    .main_card_title{
        font-size: 16px;
        font-weight: 600;
        margin-bottom : 5px;
    }

    .main_card_number{
        font-size: 24px;
        font-weight: 600;
        margin-bottom : 30px;
    }

    .main_card_increased{
        font-size: 18px;
        font-weight: 600;
    }
}

</style>