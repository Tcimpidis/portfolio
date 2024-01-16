import { useEffect, useState } from "react";
import { WindowDimension } from "./types";

export const useWindowSize = () => {
  const [size, setSize] = useState<WindowDimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { height: size.height, width: size.width } as WindowDimension;
};
