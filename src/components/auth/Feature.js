import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feature extends Component {
  componentDidMount(){
    if(!this.props.auth){
      console.log('Nope, sign in!');
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <div>Welcome to Feature!</div>
      </div>
    )
  }
};

function mapStateToProps(state){
  return { auth : state.auth };
};

export default connect(mapStateToProps)(Feature);
