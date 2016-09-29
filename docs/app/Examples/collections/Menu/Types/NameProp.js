import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Names extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'Editorials'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='reviews'
          active={activeItem === 'Reviews'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}