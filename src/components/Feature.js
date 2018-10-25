import React, { Component } from 'react';

import requireAuth from './auth/requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        <div>Welcome to Feature!</div>
      </div>
    )
  }
};

export default (requireAuth(Feature));
