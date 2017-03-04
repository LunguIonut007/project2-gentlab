import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Loader} from 'semantic-ui-react';
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
    const {loading} = this.props;

    return (
      <div>
        <Menu menuItems={this.state.menuItems} pathname={this.props.pathname}/>
        <ModalController/>
        {!!loading && <Loader active size="massive"/>}
        {this.props.children}
      </div>
    );
  }

}

Layout.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string,
  loading: PropTypes.number
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  loading: state.loader.loading
});

export default connect(mapStateToProps)(Layout);
