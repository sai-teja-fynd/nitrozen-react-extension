import React, { useEffect, useState } from "react";
import "./breadcrumb.module.scss";
import BreadCrumbItem from "./BreadCrumbItem";

export interface IBreadCrumbItem{
  label:string,
  link:string
}

let BreadCrumbItemsAll: Array<IBreadCrumbItem> = [];

export interface IBreadCrumbProps {
  handleClick: (link:string) => void;
}

const BreadCrumb:React.FC<IBreadCrumbProps> = ({handleClick}) => {
  console.log(BreadCrumbItemsAll);
  const arrSize = BreadCrumbItemsAll.length;
  return (
    <div className="bread-crumb">
      <nav className="bread-crumb-nav">
        <ul>
          {BreadCrumbItemsAll.map((BreadCrumbElement:IBreadCrumbItem, idx:number):JSX.Element => {
            return (
              <li>
                <BreadCrumbItem
                  key="idx"
                  BreadCrumb={BreadCrumbElement}
                  separator={">"}
                  isLast={idx === arrSize - 1}
                  handleClick = {handleClick}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export function setBreadCrumpsItems(label:string, link:string) {
  BreadCrumbItemsAll.forEach((ele:IBreadCrumbItem, idx:number) => {
    if (ele.label === label) {
      BreadCrumbItemsAll.splice(idx);
    }
  });
  BreadCrumbItemsAll.push({ label: label, link: link });
  // console.log("BreadCrumbItemsAll", BreadCrumbItemsAll);
}

export default BreadCrumb;