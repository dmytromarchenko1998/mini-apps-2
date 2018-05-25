import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateValue = this.updateValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.forms = {
      user: ['name', 'email', 'password'],
      address: ['line 1', 'line 2', 'city', 'state', 'zip code'],
      'credit card': ['credit card number', 'exp. data', 'CVV', 'billing zip code'],
    };
  }

  updateValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm() {
    this.props.context.setState({
      [this.props.form]: this.state,
    }, this.props.context.nextForm);
  }

  render() {
    if (this.props.form === 'credit card') {
      this.button = 'Purchase';
    } else {
      this.button = 'Next';
    }
    return (
      <div className="Form hide">
        <p>{this.props.form}</p>
        <form>
          {this.forms[this.props.form].map(inputName => (
            <p>{inputName} <input name={inputName} onChange={this.updateValue} /></p>
          ))}
        </form>
        <button id="next" onClick={this.submitForm}>{this.button}</button>
      </div>
    );
  }
}

module.exports = Form;
