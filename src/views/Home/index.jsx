import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppMenu from '../../components/AppMenu'

const apps = [
  {
    name: "CIAT",
    description: "Aplicación CIAT",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png",
      title: "CIAT",
      alt: "Aplicación CIAT"
    }
  },
  {
    name: "TEL",
    description: "Aplicación TEL",
    img: {
      url: "https://ferreteria-y-bricolaje.cdecomunicacion.es/media/articles/28303/1536215588-logo-truper-1-large-nocrop.jpg",
      title: "TEL",
      alt: "Aplicación TEL"
    }
  },
  {
    name: "SAP",
    description: "Aplicación SAP",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png",
      title: "SAP",
      alt: "Aplicación SAP"
    }
  },
  {
    name: "CIAT",
    description: "Aplicación CIAT",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png",
      title: "CIAT",
      alt: "Aplicación CIAT"
    }
  },
  {
    name: "TEL",
    description: "Aplicación TEL",
    img: {
      url: "https://ferreteria-y-bricolaje.cdecomunicacion.es/media/articles/28303/1536215588-logo-truper-1-large-nocrop.jpg",
      title: "TEL",
      alt: "Aplicación TEL"
    }
  },
  {
    name: "SAP",
    description: "Aplicación SAP",
    img: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png",
      title: "SAP",
      alt: "Aplicación SAP"
    }
  },
]


class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Bienvenido</h1>
        <h2>{this.props.userId}</h2>
        <AppMenu apps={apps}></AppMenu>
      </>
    )
  }
}

Home.prototypes = {
  userId: PropTypes.string.isRequired,
}

export default withRouter(Home)