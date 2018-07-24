import React, { Component } from 'react';


class form extends Component {

  render() {
    return (
        <form onSubmit={this.props.getDetail}>
            <div>
                <select name="city" className="form-control">
                    <option>Select City</option>
                    <option value="MUMBAI">Mumbai</option>
                    <option value="DELHI">Delhi</option>
                    <option value="BANGALORE">Bengaluru</option>
                    <option value="KOLKATA">Kolkata</option>
                    <option value="PUNE">Pune</option>
                </select>
                <button type="submit" className="btn btn-primary btn-block">Get Detail</button>
            </div>
        </form>
    );
  }
}

export default form;