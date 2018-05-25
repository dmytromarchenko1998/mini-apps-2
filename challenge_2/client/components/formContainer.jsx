import React from 'react';
import axios from 'axios';
import Form from './form.jsx';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0,
    };
    this.nextForm = this.nextForm.bind(this);
    this.completePurchase = this.completePurchase.bind(this);
  }

  nextForm() {
    this.setState({ form: this.state.form += 1 }, () => {
      const forms = document.getElementsByClassName('Form');
      forms[this.state.form - 1].classList.toggle('hide');
      if (this.state.form < 3) {
        forms[this.state.form].classList.toggle('hide');
      }
      console.log(this.state.form);
      if (this.state.form === 3) {
        this.completePurchase();
      }
    });
  }

  completePurchase() {
    axios({
      url: '/api/add',
      method: 'post',
      data: {
        user: this.state.user,
        address: this.state.address,
        creditCard: this.state.creditCard,
      },
    });
  }

  render() {
    return (
      <div className="FormContainer">
        <Form context={this} form="user" />
        <Form context={this} form="address" />
        <Form context={this} form="credit card" />
      </div>
    );
  }
}

module.exports = FormContainer;
