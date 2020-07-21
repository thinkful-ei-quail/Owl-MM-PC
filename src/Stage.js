import React from 'react';
import ReactDOM from 'react-dom';
import particiants from './participantsDummy';
import './stage.css';

export default function Stage(props){
    return (
        <div>
        <img src={props.avatar}/>
        <p>{props.name}</p>
        </div>
    )
}
