<script lang="ts">

</script>

<div class="header_input">
    <img src="/svg/magnifying.svg" alt="magnifying"/>
    <input   placeholder="Search Project"/>
    </div>

<style lang="scss">

.header_input{
    display: flex;
    align-items: center;
    gap : 10px;
    min-width : 30%;

    img{
        width : 18px;
        height : 18px;
        color : #e2e2e2;
        filter: invert(48%) sepia(4%) saturate(1725%) hue-rotate(175deg) brightness(93%) contrast(84%);

    }

    input{
        border : none;
        width : 100%;
        height : 100%;
        padding : 4px 4px;
        outline : none;
        font-size: 16px;
    }

    input::placeholder{
        color : var(--gray);
        font-size :16px
    }
}

</style>