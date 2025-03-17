export { default as Header } from './header.svelte';

export interface IButton {
  src: string;
  alt: string;
  badge: boolean;
  onClick?: () => void;
}
