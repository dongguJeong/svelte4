export { default as Table } from './table.svelte';

export interface IUser {
	name: string;
	email: string;
	user_type: string;
	joined: string;
	status: 'PENDING' | 'APPROVED' | 'REJECT';
}
