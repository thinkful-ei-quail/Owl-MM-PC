import React from 'react';
import participants from './participantsDummy';
import './Participants.css';

function Participants(props) {
    props.map((person, inSession) => {
        if (person.inSession) {
            return (
                <ul className="participantsList">
                    <li>{person.name}</li>
                    <li>{person.avatar}</li>
                    <li>{person.onStage}</li>
                </ul>
            )
        }
    }) 
};





export default Participants;