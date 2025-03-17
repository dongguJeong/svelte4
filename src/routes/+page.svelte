<script lang="ts">
  import { Title } from '../components/title';
  import { Card } from '../components/card';
  import { Table } from '../components/table';

  interface ICard {
    title: string;
    icon: string;
    number: number;
    increased: number;
    background: string;
  }

  const cards: ICard[] = [
    {
      title: 'Stock Total',
      icon: '/svg/chart.svg',
      number: 150000,
      increased: 60,
      background: 'linear-gradient(to right, #69a3ea 0%, #676fe1 100%)'
    },
    {
      title: 'Total Profit',
      icon: '/svg/database.svg',
      number: 25000,
      increased: 30,
      background: 'linear-gradient(to right, #c194fa 0%, #b67af6 100%)'
    },
    {
      title: 'Unique Visitors',
      icon: '/svg/flag.svg',
      number: 25000,
      increased: 80,
      background: 'linear-gradient(to right, #fdb686 0%, #ff9a8d 100%)'
    }
  ];

  const users = [
    {
      name: '카리나',
      email: 'aespa@stamper.network',
      role: 'Admin',
      date: '25 Apr, 2025',
      status: 'PENDING'
    },
    {
      name: '정동구',
      email: 'donggu@stamper.network',
      role: '인턴',
      date: '04 Mar, 2025',
      status: 'APPROVED'
    },
    {
      name: '장원영',
      email: 'ive@stamper.network',
      role: 'Subscriber',
      date: '25 Apr, 2025',
      status: 'APPROVED'
    },
    {
      name: '피카츄',
      email: 'pocketmon@stamper.network',
      role: 'Admin',
      date: '25 Apr, 2025',
      status: 'REJECT'
    },
    {
      name: '윈터',
      email: 'aespa@stamper.network',
      role: 'Admin',
      date: '25 Apr, 2025',
      status: 'PENDING'
    }
  ];

  const tableHeads = ['이름', '이메일', '사용자 유형', '상태', '가입일'];
</script>

<Title text="Dashboard">
  <img slot="left" alt="speed-meter" src="/svg/speed-meter.svg" class="title_img" />
</Title>

<section class="dashboard_cards_container">
  {#each cards as { background, title, number, increased, icon }}
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
  {/each}
</section>

<Card padding="2xl">
  <div class="dashboard_table_container">
    <Title size="sm" text="Standard Table Design" color="text-secondary" />
    <Table head={tableHeads} body={users} padding="lg" variant="striped" />
  </div>
</Card>

<style lang="scss">
  @import '../style/variable';
  @import '../style/mixin';
  .title_img {
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    background: $primary-light;
    margin-right: 10px;
  }

  .dashboard_cards_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    color: white;

    .dashboard_card {
      display: flex;
      flex-direction: column;
      gap: 20px;

      img {
        width: 30px;
        height: 30px;
        filter: $filter-white;
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
  }

  .dashboard_table_container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @include screen-md {
    .dashboard_cards_container {
      grid-template-columns: 1fr;
    }
  }
</style>
