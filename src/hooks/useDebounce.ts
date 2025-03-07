import { onDestroy } from 'svelte';

export function useDebounce(callback: Function, delay: number) {
	console.log('디바운스');
	let timeout: number;

	const debouncedFunction = () => {
		clearTimeout(timeout);
		timeout = setTimeout(callback, delay);
	};
	onDestroy(() => {
		clearTimeout(timeout);
	});
}
