import { IBreadCrumbItem } from './BreadCrumb';
export interface IBreadCrumb {
    BreadCrumb: IBreadCrumbItem;
    separator: string;
    isLast: boolean;
}
declare function BreadCrumbItem(BreadCrumbInput: IBreadCrumb): JSX.Element;
export default BreadCrumbItem;
