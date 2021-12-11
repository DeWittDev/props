import React from 'react';

const PersonCard = (props) => {
    return (
        <>

        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Is {props.age} years old</p>
        <p>Has {props.hair} hair</p>

        </>
    );
}

export default PersonCard;