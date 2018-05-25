import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/formContainer.jsx';

const App = (props) => {
  const toggleForm = () => {
    document.getElementsByClassName('Form')[0].classList.toggle('hide');
  };
  return (
    <div>
      <div>
        <button id="checkout" onClick={toggleForm}>checkout</button>
      </div>
      <FormContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

