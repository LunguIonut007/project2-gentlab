import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import ModalController from './ModalController';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    const menuItems = [
      {
        name: 'Dashboard',
        pathname: '/',
      },
      {
        name: 'Products',
        pathname: '/products',
      },
      {
        name: 'Suppliers',
        pathname: '/suppliers',
      }
    ];

    this.state = { menuItems };
  }

  render() {
    return (
      <div>
        <Menu menuItems={this.state.menuItems} pathname={this.props.pathname}/>
        <ModalController/>
        {this.props.children}
      </div>
    );
  }

}

Layout.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname
});

export default connect(mapStateToProps)(Layout);
