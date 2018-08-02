import React, { Component } from 'react';
import _ from 'lodash';
import logo from '../../../public/img/logo.svg';
class Home extends Component {
  render() {
    console.log('RES', this.props)
    const { tableData } = this.props;
    return (
      <div className="home-container">
        <button className='btn btn-primary' onClick={this.props.onClickLogout}>Logout</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            {_.map(tableData.data || [], (item, key) => <tr key={key}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;