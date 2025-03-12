export { default as Header } from './header.svelte';

export interface IIMAGE {
	src: string;
	alt: string;
	badge: boolean;
}

export interface IButton extends IIMAGE {
	onClick?: () => void;
}
