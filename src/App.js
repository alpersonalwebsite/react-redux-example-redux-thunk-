import { connect } from 'react-redux'
import React, { Component } from 'react'
//import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const renderUsers = () => {
      return this.props.users.map((user, index) => {
        return <li key={index}>{user.name}</li>
      })
    }

    return (
      <div>
        <h1>List of Users</h1>
        <div>{renderUsers()}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

/*
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUsers }, dispatch);
};
*/

export default connect(mapStateToProps, { fetchUsers })(App)
