import React, { FC } from "react"; 

export interface IProps {
    text: string;
}

export const Title: FC<IProps> = ({text}) => <div>{text}</div>

const App: FC = (): JSX.Element => {
    return (
        <div>
            <span>This is a boilerplate</span>
            <Title text="Example test" />
        </div>
    )
};

export default App;