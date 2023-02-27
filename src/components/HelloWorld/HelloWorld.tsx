import React from "react";
import "./HelloWorld.scss";

export interface IHelloWord{
  text:string
}

const HelloWorld = (props:IHelloWord) => {
  const {text} = props;
  return <div className="test">{text}</div>;
};

HelloWorld.defaultProps = {
  text:"Hello World"
}

export default HelloWorld;
