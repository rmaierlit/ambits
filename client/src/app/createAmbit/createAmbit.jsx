import React from 'react';
import * as Utils from '../utils/utils.js';

export default class CheckinContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreateAmbit(event){
    postAmbit(this.state.ambit);
  }

  render() {
    return(
      <div>
        <h1>Create a new Ambit</h1>
        <p>lolwut</p>
      </div>
    )
  }

}
