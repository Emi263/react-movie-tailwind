import React from "react";

import Lottie from "react-lottie";
import star from "./star.json";
function LottieFile() {
  const Default = {
    loop: true,
    autoplay: true,
    animationData: star,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={Default} height={400} width={400} />
    </div>
  );
}

export default LottieFile;
