import React from "react";
import "./HelloWorld.scss";

const HelloWorld = (props:any) => {
  return <div className="test">{props.text}</div>;
};

export default HelloWorld;
