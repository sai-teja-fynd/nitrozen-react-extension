import React, { useEffect, useState } from "react";
import "./saleschannelmainframe.scss";
import { Input, Dropdown} from "@gofynd/nitrozen-react";
import { IApplication } from "./application";
import Card from "./atoms/Card";

type ISalesChannelsList = {
  salesChannelsList: Array<IApplication> ,
  handleClick: Function
}

function SalesChannelMainFrame({salesChannelsList,handleClick}: ISalesChannelsList){
  const [salesChannelsListToShow, setSalesChannelsListToShow]= useState<Array<IApplication>>(
    []
  );

  const [dropDownValue, setDropDownValue] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("salesChannelsList",salesChannelsList);
    
    if(!salesChannelsList){
      setSalesChannelsListToShow(salesChannelsList);
    }
  }, [salesChannelsList]);

  useEffect(() => {
    const tempList = salesChannelsList
      .filter((listItem:IApplication) => {
        return listItem.name.toLowerCase().includes(searchValue);
      })
      .filter((listItem:any) => {
        return dropDownValue === 0
          ? true
          : listItem.isActive === (dropDownValue === 1);
      });
    setSalesChannelsListToShow(tempList);
  }, [searchValue, dropDownValue]);

  const handleSearch = (e:any) => {
    setSearchValue(e?.target?.value.toLowerCase());
  };

  const handleDropdown = (e:any) => {
    setDropDownValue(e);
  };

  return (
    <div className="sales-channel-main-frame white-box">
      <div className="sales-channel-main-frame-title">
        <h3>Choose Sales Channel</h3>
        <p>
          Here's a list of sales channels for which the extension are either
          active or inactive
        </p>
      </div>
      <div className="grey-bg">
        <div className="sales-channel white-box">
          <h4>Sales Channel</h4>
          <div className="search">
            <Input
              type="text"
              showSearchIcon={true}
              placeholder="Search Sales Channel"
              onChange={handleSearch}
            />
            <Dropdown
              id="ddlStates"
              items={[
                {
                  text: "All",
                  value: 0,
                },
                {
                  text: "Active",
                  value: 1,
                },
                {
                  text: "Inactive",
                  value: 2,
                },
              ]}
              onChange={handleDropdown}
              placeholder="All"
            />
          </div>
          <div className="sales-channel-grid">
            {salesChannelsListToShow?.map((salesChannel:any, idx:number) => (
              <Card
                  id = {salesChannel.id}
                  title= {salesChannel.name}
                  logo = {salesChannel.logo?salesChannel.logo:"https://hdn-1.fynd.com/company/884/applications/000000000000000000000001/application/pictures/free-logo/original/v6YLFKFeJ-Fynd.jpeg" }
                  description =  {salesChannel.description}
                  isActive= {salesChannel.is_active}
                  handleClick= {handleClick}
                  key = {salesChannel.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesChannelMainFrame;
