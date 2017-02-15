import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';

import './../components/main.css';

const data = require('./../mockup/db.json');

class Suppliers extends React.Component {

  componentDidMount() {
    // get data
    this.props.requestSuppliers();
  }

  render() {
    const { suppliers } = this.props;
    const supplierProperties = suppliers.length > 0 ? Object.getOwnPropertyNames(suppliers[0]) : [];
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
        <Table data={suppliers} headers={supplierProperties} />
      </div>
    );
  }
}

Suppliers.propTypes = {
  pathname: PropTypes.string.isRequired,
  suppliers: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestSuppliers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  suppliers: state.suppliers.list
});

const mapDispatchToProps = dispatch => ({
  requestSuppliers: () => dispatch(Actions.requestSuppliers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);

