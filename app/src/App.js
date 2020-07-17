import React from 'react';
import Snapshot from './components/Snapshot'
import { connect } from 'react-redux'
import Form from './components/Form'

const App = (props) => {
  return (
    <div className='uk-section'>
      <Form />
      <Snapshot />
    </div>
  );
}

export default connect()(App);
