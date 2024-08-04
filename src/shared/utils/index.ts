export const debounceInstance = () => {
  let timeout: number;
  return (callback: () => void) => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 300);
  };
};
