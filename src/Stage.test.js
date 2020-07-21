import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';

it('generate the stage elements',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Stage avatar="testimage" name="Matt" />,div)
    ReactDOM.unmountComponentAtNode(div);
});