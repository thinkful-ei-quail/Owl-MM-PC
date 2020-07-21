import React from 'react';
import './Chat.css';
import chatEvents from './chatEvents';
import participants from './participantsDummy';


function chatEvent(props) {
    // for each object in chatEvents participants are referenced by participantId, we want to display the participant Name

    //filter through participantsDummy and find where chatEvents.ParticipantId === participantsDummy.id
    let person = props.participants.find(person =>
        person.id === props.chatEvent.participantId);
    let name = <li>{person.name}</li>;
    let content = '';
    let date = new Date(props.chatEvent.timestamp);

    if(props.chatEvent.type === 'message') {
        content = <li>{date.toLocaleString()} {props.chatEvent.message}</li>
        }
    else {
        content = props.chatEvent.type;
    }
    

    return (
        <div>
            {name}
            {content}
        </div>)
}


export default chatEvent;