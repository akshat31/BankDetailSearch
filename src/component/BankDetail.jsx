import React, { Component } from 'react';

class BankDetail extends Component {

  render() {
    return (
        <tr>
            <td>{this.props.data.bank_name}</td>
            <td>{this.props.data.state}</td>
            <td>{this.props.data.branch}</td>
            <td>{this.props.data.ifsc}</td>
            <td>{this.props.data.address}</td>
        </tr>
    );
  }
}

export default BankDetail;