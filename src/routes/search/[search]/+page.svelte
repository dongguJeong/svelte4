<script lang="ts">
  import { Card } from '../../../components/card';
  import { Title } from '../../../components/title';
  import { page } from '$app/stores';
</script>

<Card>
  <Title text="검색 결과 {$page.params.search}" />
</Card>
