import React from 'react';
import participants from './participantsDummy';
import './Participants.css';

function Participants(props) {
   let list = props.persons.map((person) => {
        if (person.inSession) {
            return (
                <ul key={person.name} className="person">
                    <li>{person.name}</li>
                    <li>{person.avatar}</li>
                    <li>{person.onStage}</li>
                </ul>
            )
        }
    })
    return (
        <div>
            {list}
        </div>
    );
};





export default Participants;