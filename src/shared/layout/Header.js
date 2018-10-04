import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from 'redux/modules/auth'
import {
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  PopoverInteractionKind,
  Position,
  Navbar,
  Alignment,
  Button,
} from '@blueprintjs/core'
import styles from './Header.scss'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    logoutUser: PropTypes.func.isRequired,
  }
  render() {
    const { title = 'React Application', logoutUser } = this.props
    let settingsMenu = (
      <Menu>
        <MenuItem text="Settings..." icon="cog" />
        <MenuDivider />
        <MenuItem onClick={logoutUser} text="Log Out" icon="log-out" />
      </Menu>
    )

    return (
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>{title}</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Link to="/" className={styles.headerLink}>
            <Button className="bp3-minimal" icon="dashboard" text="Dashboard" />
          </Link>
          <Link to="/users" className={styles.headerLink}>
            <Button className="bp3-minimal" icon="user" text="Users" />
          </Link>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="notifications" />
          <Popover
            content={settingsMenu}
            interactionKind={PopoverInteractionKind.CLICK}
            position={Position.BOTTOM_RIGHT}
            useSmartArrowPositioning
            inheritDarkTheme={false}
          >
            <Button className="bp3-minimal" icon="cog" />
          </Popover>
        </Navbar.Group>
      </Navbar>
    )
  }
}

export default connect(
  null,
  { logoutUser }
)(Header)
