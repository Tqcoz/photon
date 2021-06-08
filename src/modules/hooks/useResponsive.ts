import { useMediaQuery } from "react-responsive";

export const useResponsive = ():"3-cols" | "2-cols" | "1-cols" | "fullscreen" => {
  const is3Cols = useMediaQuery({ minDeviceWidth: 1336 });
  const is2Cols = useMediaQuery({ minDeviceWidth: 1265 });
  const is1Cols = useMediaQuery({ minDeviceWidth: 800 });

  if (is3Cols) {
    return "3-cols";
  }
  if (is2Cols) {
    return "2-cols";
  }
  if (is1Cols) {
    return "1-cols";
  }
  return "fullscreen";
};