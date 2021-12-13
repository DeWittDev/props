import { useState } from 'react';

const State = () => {
    const [text, setText] = useState("");
    setText("state state I am setting state!!!");
    return (
        <div>
            <p>{state.greeting}</p>
        </div>
    );
}

export default State;