import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

const Loader = () => {
  const animationContainer = useRef(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current && !animationInstance.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current as Element,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/assets/ZKEmailLoader.json",
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null;
      }
    };
  }, []);

  return <div ref={animationContainer} className="h-16 w-16"></div>;
}

export default Loader;
