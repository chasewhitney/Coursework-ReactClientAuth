import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = (formProps) => {
    console.log('formProps:', formProps);
    this.props.signup(formProps);
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
        <button>Sign up!</button>
      </form>
    );
  }
}
export default compose(
  reduxForm({ form: 'signup'}),
  connect(null, actions),
)(Signup);