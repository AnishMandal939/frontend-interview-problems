import { useState, useEffect } from "react";
import useThrottle from "../../custom/hooks/Throttle";

export default function ThrottlePage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // any expensive operation or API call
  };

  const throttledHandleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);
    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  });

  return <div> Window size is: {windowSize?.width} x {windowSize?.height}</div>;
}
