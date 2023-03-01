import React from "react";
import { SvgArrowForward } from "@gofynd/nitrozen-react";
import "./card.scss";

export interface ICardProps{
    id:string,
    title:string,
    logo:string ,
    description:string,
    isActive:boolean,
    handleClick:Function,
}

function Card(cardProps:ICardProps){
  return (
    <div className="sales-channel-card">
      <div className ="card-logo-style">
        <img src= {cardProps.logo} />
      </div>
      <div className="card-content">
        <h4>{cardProps.title}</h4>
        <p>{cardProps.description}</p>
      </div>
      <div className="button-container">
          <div
            className={
              cardProps.isActive === true
                ? "active_button float-left"
                : "inactive_button float-left"
            }
          >
            {cardProps.isActive === true ? "ACTIVE" : "INACTIVE"}
          </div>
        <div
          onClick={()=>cardProps.handleClick(cardProps.id)}
          className="select-widget float-right go-arrow"
        >
          <SvgArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Card;
