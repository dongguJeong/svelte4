export function useDebounce(callback: Function, delay: number) {
	let timeId: number;

	return (...args: any) => {
		if (timeId) clearTimeout(timeId);
		timeId = setTimeout(callback, delay, ...args);
	};
}
