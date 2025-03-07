export { default as DashboardCards } from './dashboard-cards.svelte';

export interface ICard {
	title: string;
	icon: string;
	number: number;
	increased: number;
	bg_gradient: 'purple_gradient' | 'blue_gradient' | 'orange_gradient';
}
