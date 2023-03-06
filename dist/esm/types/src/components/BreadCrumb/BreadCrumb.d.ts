import "./breadcrumb.scss";
export interface IBreadCrumbItem {
    label: string;
    link: string;
}
export default function BreadCrumb(handleClick: Function): JSX.Element;
export declare function setBreadCrumpsItems(label: string, link: string): void;
