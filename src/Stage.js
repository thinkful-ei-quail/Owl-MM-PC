import React from 'react';
import ReactDOM from 'react-dom';
import particiants from './participantsDummy';
import './Stage.css';

export default function Stage(props){
    if(props.onStage){
    return (
        <div>
        <img src={props.avatar}/>
        <p>{props.name}</p>
        </div>
    )
    };
};
