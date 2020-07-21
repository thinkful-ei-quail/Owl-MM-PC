import React from 'react';
import ReactDOM from 'react-dom';
import ChatEvent from './Chat';
import Stage from './Stage';
import Participants from './Participants';

function App() {
  return (
    <main className='App'>
      {Participants()}
      {Stage()}
      {ChatEvent()}
    </main>
  );
}
export default App;