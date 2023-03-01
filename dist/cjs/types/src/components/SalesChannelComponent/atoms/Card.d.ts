import "./card.scss";
export interface ICardProps {
    id: string;
    title: string;
    logo: string;
    description: string;
    isActive: boolean;
    handleClick: Function;
}
declare function Card(cardProps: ICardProps): JSX.Element;
export default Card;
