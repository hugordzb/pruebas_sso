import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppMenu from '../../components/AppMenu'

import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Bienvenido</h1>
        <h2>{this.props.userId}</h2>
        <AppMenu apps={this.props.apps}></AppMenu>
      </>
    )
  }
}

Home.prototypes = {
  userId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  apps: state.user.apps
})

const HomeConnected = connect(mapStateToProps, null)(Home)

export default withRouter(HomeConnected)