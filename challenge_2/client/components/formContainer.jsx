import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FormOne from './formOne.jsx';
import FormTwo from './formTwo.jsx';
import FormThree from './formThree.jsx';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form:0
    };
    this.nextForm = this.nextForm.bind(this);
    this.changeButton =this.changeButton.bind(this);
  }

  nextForm() {
    this.setState({form:this.state.form += 1}, () => {
      this.changeButton();
      const forms = document.getElementsByClassName('Form');
      forms[this.state.form - 1].classList.toggle('hide');
      forms[this.state.form].classList.toggle('hide');
    })
  }

  changeButton() {
    if (this.state.form === 2) {
      document.getElementById('next').classList.toggle('hide');
      document.getElementById('complete').classList.toggle('hide');
    }
  }

  render() {
    return (
      <div className="FormContainer">
        <FormOne />
        <FormTwo />
        <FormThree />
        <div>
          <button id="next" onClick={this.nextForm} >next</button>
          <button id="complete" className="hide" >complete</button>
        </div>
      </div>
    );
  }
}

module.exports = FormContainer;