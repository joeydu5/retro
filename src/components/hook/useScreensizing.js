import { useState, useEffect } from "react";

function useScreensizing() {
  const initialSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const [screenWidth, setScreenWidth] = useState(initialSize.width);
  const [screenHeight, setScreenHeight] = useState(initialSize.height);

  useEffect(() => {
    function resizeHandler() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return { screenWidth, screenHeight };
}

export default useScreensizing;
