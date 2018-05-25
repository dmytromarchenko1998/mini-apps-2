import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/formContainer.jsx';

const App = (props) => { 
  return (
    <div>
      <FormContainer />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

