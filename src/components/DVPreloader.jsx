import React from "react";
import preloader from "../assets/preloader.svg";

export default () => {
  return (
    <div
      id="preloader"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        overflow: "hidden",
        height: "100%"
      }}
    >
      <img alt="loading" src={preloader} />
    </div>
  );
};
