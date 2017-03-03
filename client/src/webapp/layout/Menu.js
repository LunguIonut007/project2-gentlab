import React, { Component, PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);

  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });

    const item = this.props.menuItems.filter(menuItem => name === menuItem.name)[0];

    browserHistory.push(item.pathname);

  }

  render() {
    const activeItem = this.props.pathname;
    const menuItems = this.props.menuItems.map((item, index) => (
      <Menu.Item
        key={index}
        onClick={this.handleItemClick}
        name={item.name}
        active={activeItem === item.pathname}
        color="purple"
      >
        {item.name.toUpperCase()}
      </Menu.Item>
      ));
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



