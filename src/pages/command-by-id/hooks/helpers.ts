export const scrollToContent = () => {
  window.scrollTo({
    top: document.querySelector("header")?.getBoundingClientRect().height ?? 0,
  });
};
