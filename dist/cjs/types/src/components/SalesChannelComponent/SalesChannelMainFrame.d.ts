import "./saleschannelmainframe.scss";
import { IApplication } from "./application";
type ISalesChannelsList = {
    salesChannelsList: Array<IApplication>;
    handleClick: Function;
};
declare function SalesChannelMainFrame({ salesChannelsList, handleClick }: ISalesChannelsList): JSX.Element;
export default SalesChannelMainFrame;
