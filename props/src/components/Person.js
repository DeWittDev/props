import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ birthday, setBirthday ] = useState(props.age)

    return (
        <>

        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Is {birthday} years old</p>
        <p>Has {props.hair} hair</p>
        <button onClick={ (event)=> setBirthday(birthday + 1) }>Description</button>
        </>
    );
}

export default PersonCard;