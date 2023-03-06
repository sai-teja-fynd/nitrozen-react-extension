import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IBreadCrumbItem } from  './BreadCrumb';
import "./breadcrumb.module.scss";

export interface IBreadCrumb{
  BreadCrumb:IBreadCrumbItem,
  separator:string,
  isLast:boolean,
  handleClick:(link:string)=>void
}

function BreadCrumbItem(BreadCrumbInput:IBreadCrumb) {
  //   console.log({ BreadCrumb, seperator, isLast });
  return (
    <div className="bread-crumb-item" onClick={() => BreadCrumbInput.handleClick(BreadCrumbInput.BreadCrumb.link)}>
        <span className={`bread-crumb-item-label  ${BreadCrumbInput.isLast ? "active-bread-crumb-label" : ""}`}>{BreadCrumbInput.BreadCrumb.label}</span>
      {!BreadCrumbInput.isLast && <span className="bread-crumb-separator">{BreadCrumbInput.separator}</span>}
    </div>
  );
}

export default BreadCrumbItem;
