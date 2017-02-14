import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from './../components/Table';
import Menu from './../components/Menu';
import './../components/main.css';

const data = require('./../mockup/db.json');

class Main extends React.Component {

  render() {
    const { product, supplier } = data;
    const productProperties = Object.getOwnPropertyNames(product[0]);
    const supplierProperties = Object.getOwnPropertyNames(supplier[0]);
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
        <Table data={supplier} headers={supplierProperties} />
        <Table data={product} headers={productProperties} />
      </div>
    );
  }
}

Main.propTypes = {
  pathname: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    pathname: state.routing.locationBeforeTransitions.pathname
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // / Kinder
    // selectDashboard: (selected) => dispatch(Actions.selectedDashboard(selected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

