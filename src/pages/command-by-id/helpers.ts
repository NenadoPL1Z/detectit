export const getHeaderHeight = () => {
  try {
    return document.querySelector("header")?.getBoundingClientRect().height;
  } catch {
    return 0;
  }
};
