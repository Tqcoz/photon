import { useMediaQuery } from "@chakra-ui/media-query";


export const useResponsive = ():"3-cols" | "2-cols" | "1-cols" | "fullscreen" => {
  const [is3Cols] = useMediaQuery("(min-width: 1340px)");
  const [is2Cols] = useMediaQuery("(min-width: 1260px)");
  const [is1Cols] = useMediaQuery("(min-width: 800px)");

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