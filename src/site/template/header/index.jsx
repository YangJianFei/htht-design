import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logoPic from '../../../static/images/icon_logo.jpeg'
import { Links } from '../../../router/main_router'
import { varibles } from '../../../config'
import './style.scss'

const { hthtPrefix } = varibles

@withRouter
class Header extends React.Component {
  render () {
    return (
      <div id={`${hthtPrefix}-header`}>
        <div id='logo'>
          <Link to='/'>
            <img src={logoPic} alt='logo' />
            <h1>南京航天宏图组件库</h1>
          </Link>
        </div>
        <div id='nav'>
          <Links />
        </div>
      </div>
    )
  }
}

export default Header
