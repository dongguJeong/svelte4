<script lang="ts">
  import { Card } from '../card';

  export let background: string;
  export let title: string;
  export let icon: string;
  export let number: number;
  export let increased: number;
</script>

<Card style={`background : ${background}`} padding="lg">
  <div class="dashboard_card">
    <img src={icon} alt="chart" class="dashboard_card_icon" />
    <div class="dashboard_card_content">
      <div class="dashboard_card_title">{title}</div>
      <div class="dashboard_card_number">${number}</div>
    </div>

    <div class="dashboard_card_increased">
      Increased by {increased}%
    </div>
  </div>
</Card>

<style lang="scss">
  @use '../../style/variable';

  .dashboard_card {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      width: 30px;
      height: 30px;
      filter: variable.$filter-white;
    }

    .dashboard_card_content {
      display: flex;
      flex-direction: column;
      font-size: larger;
      font-weight: 600;
    }

    .dashboard_card_increased {
      font-size: large;
    }
  }
</style>
