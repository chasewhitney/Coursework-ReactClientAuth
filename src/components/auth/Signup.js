import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class Signup extends Component {
  state = { error : ''};
  onSubmit = (formProps) => {
    console.log('formProps:', formProps);
    this.setState({error: ''})
    this.props.signup(formProps, this.handleResponse);
  }

  handleResponse = err => {
    if(err) {
      return this.setState({error: err.statusText})
    }
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="off"
            />
        </fieldset>
        <div>{this.state.error}</div>
        <button>Sign up!</button>
      </form>
    );
  }
}
export default compose(
  reduxForm({ form: 'signup'}),
  connect(null, actions),
)(Signup);
