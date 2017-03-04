import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Table from './../../components/tables/Table';
import Actions from './../../actions/creators';
import {TableDashboardProduct} from './../../classes/Product';
import {TableDashboardSupplier} from './../../classes/Supplier';
import './../../styles/main.css';

class Dashboard extends React.Component {

  componentDidMount() {
    // get data
    this.props.requestLast5Suppliers();
    this.props.requestLast5Products();
  }
  render() {
    const { last5Suppliers, last5Products } = this.props;
    // transform server data to client table friendly data
    const configSuppliers = last5Suppliers.map((supplier, index) => new TableDashboardSupplier(index + 1, supplier));
    const configProducts = last5Products.map((product, index) => new TableDashboardProduct(index + 1, product));

    return (
      <div>
        <div className="container">
          <Table data={configSuppliers} title="Suppliers" color="green"/>
          <Link to="/suppliers" className="link"> View all suppliers... </Link>
        </div>

        <div className="container">
          <Table data={configProducts} title="Products" color="green"/>
          <Link to="/products" className="link"> View all products... </Link>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  last5Suppliers: PropTypes.arrayOf(PropTypes.object),
  last5Products: PropTypes.arrayOf(PropTypes.object),
  requestLast5Suppliers: PropTypes.func.isRequired,
  requestLast5Products: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  last5Suppliers: state.last5Suppliers.list,
  last5Products: state.last5Products.list
});

const mapDispatchToProps = dispatch => ({
  requestLast5Suppliers: () => dispatch(Actions.requestLast5Suppliers()),
  requestLast5Products: () => dispatch(Actions.requestLast5Products())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

