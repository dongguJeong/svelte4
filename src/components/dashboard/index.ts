export { default as DashboardCard } from './dashboard-card.svelte';

export interface ICard {
  title: string;
  icon: string;
  number: number;
  increased: number;
  background: string;
}
