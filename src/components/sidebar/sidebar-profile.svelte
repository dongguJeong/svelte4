<script lang="ts"></script>

<div class="sidebar_profile">
    <img src="/svg/picachu.png" alt="picachu"/>
    <div >
        <span>정동구</span>
        <span>fronend developer</span>
    </div>
</div>

<style lang="scss">

.sidebar_profile{
    display: flex;
    align-items: center;
    gap : 10px;
    img{
        width : 40px;
        height : 40px;
        border-radius: 50%;
        border : 2px solid rgba(0,0,0,0.3);
    }

    div{
        display: flex;
        flex-direction: column;

        span:nth-child(2){
            color : var(--gray);
            font-size :14px
        }
    }
}

</style>