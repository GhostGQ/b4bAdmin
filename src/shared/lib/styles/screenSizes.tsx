import useScreenSize from '@shared/hooks/useScreenSize';

export const screenSizes = () => {
  const {width} = useScreenSize();

  return {
    xl: width < 1536,
    lg: width < 1276,
    md: width < 1024,
    mobile: width < 640,
  };
};
