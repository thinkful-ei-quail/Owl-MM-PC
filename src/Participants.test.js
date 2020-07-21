import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants';
import participants from './participantsDummy';
import renderer from 'react-test-renderer';


it('should generate participants list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants persons = {[{name:"lip", avatar:"imageFile", onStage:'true', inSession:true}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('snapshot of working UI', () => {
    const tree = renderer
        .create(<Participants persons = {[{name:"lip", avatar:"imageFile", onStage:'true', inSession:true}]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});