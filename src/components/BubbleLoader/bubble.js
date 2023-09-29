import React from "react";
import { BounceLoader } from "./components";

const Loading = () => {
  return (
    <div>
      <BounceLoader left="50vw" top="50vh" color="#2080E0" size={0.8}/>
    </div>
  );
};

export default Loading;