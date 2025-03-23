"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width }}
    />
  );
};

export default AnimationLottie;
