import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import chatEvents from './chatEvents';
import participants from './participantsDummy';
import renderer from 'react-test-renderer';


it('should render chatlog', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat participants={participants} chatEvent={chatEvents[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of working? UI', () => {
    const tree = renderer 
        .create(<Chat participants={participants} chatEvent={chatEvents[0]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});