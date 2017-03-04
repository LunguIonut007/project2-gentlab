import React, {PropTypes} from 'react';
import {Input, Dropdown} from 'semantic-ui-react';
import Table from './Table';
import './../../styles/main.css';

export default class TableWithSearch extends React.Component {

  componentWillMount() {
    // options = the criteria by which the table data can be sorted
    const options = this.props.columns.map((column, index) => (
      {key: index, text: column, value: column}
        ));

    this.state = {searchData: '', options, searchColumns: []};
  }

  getFilteredData() {
    const { data } = this.props;
    const {searchColumns, searchData} = this.state;

    const verifyIfObjectMatch = (stringData, searchDataParam) =>
        (stringData.toString().toLowerCase().includes(searchDataParam.toLowerCase()));

    // if the search bar value is not empty, filter the data
    if (searchData.trim() !== '') {
      return data.filter(object => (searchColumns.some(column => (verifyIfObjectMatch(object[column], searchData)))));
    }
    // else return the data unfiltered
    return data;
  }

  handleChange = (e) => {
    this.setState({searchData: e.target.value});
  };

  handleColumnChange = (e, {value}) => {
    this.setState({searchColumns: value});
  };

  render() {
    return (
      <div>
        <div className="divSome">
          <div>Filter by:</div>
          <Input
            value={this.state.searchData} className="searchBar" onChange={this.handleChange}
            type="text" icon="search" placeholder="Search..." size="tiny"/>

          <Dropdown
            placeholder="Filter" onChange={this.handleColumnChange}
            multiple fluid selection options={this.state.options} />
        </div>
        <Table data={this.getFilteredData()} color={this.props.color} />
      </div>
    );
  }
}

TableWithSearch.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string
};
