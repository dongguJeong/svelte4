export let debounce = (callback: Function, delay: number) => {
  let timeId: number;

  return (...args: any[]) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(callback, delay, ...args);
  };
};
