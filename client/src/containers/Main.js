import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';

import './../components/main.css';

const data = require('./../mockup/db.json');

class Main extends React.Component {

  componentDidMount() {
    // get data
    this.props.requestLast5Suppliers();
  }
  render() {
    const { last5Suppliers } = this.props;
    const last5SuppliersProperties = last5Suppliers.length > 0 ? Object.getOwnPropertyNames(last5Suppliers[0]) : [];

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
    return (
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <Table data={last5Suppliers} headers={last5SuppliersProperties} />
      </div>
    );
  }
}

Main.propTypes = {
  pathname: PropTypes.string.isRequired,
  last5Suppliers: PropTypes.arrayOf(PropTypes.object),
  requestLast5Suppliers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  last5Suppliers: state.last5Suppliers.list
});

const mapDispatchToProps = dispatch => ({
  requestLast5Suppliers: () => dispatch(Actions.requestLast5Suppliers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

