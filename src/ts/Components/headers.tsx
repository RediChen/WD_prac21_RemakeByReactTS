import {FC} from "react";
interface IHeaderProps {
    text: string
}
const H1: FC<IHeaderProps> = ({ text }) =>
    <header>
        <h1 className="title-1">{text}</h1>
        <hr className="hr-1" />
    </header>
const H2: FC<IHeaderProps> = ({ text }) =>
    <>
        <h3 className="title-2">{text}</h3>
        <hr className="hr-3" />
    </>
const H3: FC<IHeaderProps> = ({ text }) =>
    <>
        <h3>{text}</h3>
        <div className="hr-2">
            <div></div>
            <hr />
        </div>
    </>
export { H1, H2, H3 };