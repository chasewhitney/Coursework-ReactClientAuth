import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class Signin extends Component {
  state = { error : ''};
  onSubmit = (formProps) => {
    console.log('formProps:', formProps);
    this.setState({error: ''})
    this.props.signin(formProps, this.handleResponse);
  }

  handleResponse = err => {
    if(err) {
      return this.setState({error: 'Invalid login credentials.'})
    }
    this.props.history.push("/feature");
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
        <button>Sign in!</button>
      </form>
    );
  }
}
export default compose(
  reduxForm({ form: 'signin'}),
  connect(null, actions),
)(Signin);
