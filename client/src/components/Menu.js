import React, { Component, PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const activeItem = this.props.pathname;
    const menuItems = this.props.menuItems.map((item, index) => (
      <Menu.Item
        key={index}
        name={item.name}
        active={activeItem === item.pathname}
        onClick={this.handleItemClick}
        >
        {item.name.toUpperCase()}
      </Menu.Item>));
    return (
      <Menu>
        {menuItems}
      </Menu>
    );
  }
}
MenuComponent.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired
};
