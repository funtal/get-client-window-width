const isSupported = () => typeof window !== 'undefined';

export const getClientWindowWidth = () => {
  if (!isSupported()) {
    return 0;
  }

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

export default getClientWindowWidth;
