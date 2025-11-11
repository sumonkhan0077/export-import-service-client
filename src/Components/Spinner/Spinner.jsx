import React from "react";
import loadingAnimation from "../../assets/Sandy_Loading.json";
import Lottie from "lottie-react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-80"
      />
    </div>
  );
};

export default Spinner;
