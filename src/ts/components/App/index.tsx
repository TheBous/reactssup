import React, { useState, FC } from "react"; 
import Title from "../Title";

const App: FC = (): JSX.Element => {
    const [showH1, setH1Visibility] = useState<boolean>(false);
    const toggleH1 = (): void => setH1Visibility((oldH1Visibility) => !oldH1Visibility);

    return (
        <div data-testid="container">
            {showH1 && <h1 data-testid="title">Reactssup title</h1>}
            <span>This is a boilerplate</span>
            <Title text="Example test" />
            <button onClick={toggleH1} data-testid="button">Button</button>
        </div>
    )
};

export default App;