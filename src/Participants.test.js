import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants';
import participants from './participantsDummy';
import renderer from 'react-test-renderer';

describe('smoke and snapshot of participants.js',()=>{
it('should generate participants list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants persons = {[{name:"lip", avatar:"imageFile", onStage:'true', inSession:true}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
it('should not generate participants list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants persons = {[{name:"matt", avatar:"imageFile", onStage:'true', inSession:false}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
it('snapshot of working UI', () => {
    const tree = renderer
        .create(<Participants persons = {[{name:"lip", avatar:"imageFile", onStage:'true', inSession:true}]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('snapshot of working UI', () => {
    const tree = renderer
        .create(<Participants persons = {[{name:"map", avatar:"imageFile", onStage:'true', inSession:false}]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
});