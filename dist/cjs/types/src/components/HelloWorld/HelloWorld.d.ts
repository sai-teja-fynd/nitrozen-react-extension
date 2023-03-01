import "./HelloWorld.scss";
export interface IHelloWord {
    text: string;
}
declare const HelloWorld: {
    (props: IHelloWord): JSX.Element;
    defaultProps: {
        text: string;
    };
};
export default HelloWorld;
