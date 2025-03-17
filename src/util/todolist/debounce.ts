export let debounce = (callback: Function, delay: number) => {
  let timeId;

  return (...args: any[]) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
