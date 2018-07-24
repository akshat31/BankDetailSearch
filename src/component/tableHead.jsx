import React, { Component } from 'react';

class tableHead extends Component {

  render() {
    return (
        <tr>
            <th>Bank Name</th>
            <th>State</th>
            <th>Branch</th>
            <th>IFSC</th>
            <th>Address</th>
        </tr>
    );
  }
}

export default tableHead;