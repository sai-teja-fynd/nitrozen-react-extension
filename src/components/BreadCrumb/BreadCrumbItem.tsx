import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IBreadCrumbItem } from  './BreadCrumb';

export interface IBreadCrumb{
  BreadCrumb:IBreadCrumbItem,
  separator:string,
  isLast:boolean
}

function BreadCrumbItem(BreadCrumbInput:IBreadCrumb) {
  //   console.log({ BreadCrumb, seperator, isLast });
  return (
    <div className="bread-crumb-item">
      {/* <Link
        className={`bread-crumb-item-label  ${BreadCrumbInput.isLast ? "active-bread-crumb-label" : ""}`}
        to={BreadCrumbInput.BreadCrumb.link}
      > */}
        {BreadCrumbInput.BreadCrumb.label}
      {/* </Link> */}
      {!BreadCrumbInput.isLast && <span className="bread-crumb-separator">{BreadCrumbInput.separator}</span>}
    </div>
  );
}

export default BreadCrumbItem;
