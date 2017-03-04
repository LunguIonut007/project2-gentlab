import React, { PropTypes } from 'react';
import { Table, Header } from 'semantic-ui-react';
import './../../styles/main.css';

class TableComponent extends React.Component {

  render() {
    const { data, title, color } = this.props;
    // put object properties as table headers
    const headers = (data.length > 0 ? Object.getOwnPropertyNames(data[0]) : []);

    const tableHeaders = headers.map((header, indexHeader) => (
      <Table.HeaderCell key={indexHeader}>{header}</Table.HeaderCell>));

    const tableBody = data.map((row, indexRow) => (
      <Table.Row key={indexRow}>
        { headers.map((header, indexHeader) => (
          <Table.Cell key={indexHeader}>{row[header]}</Table.Cell>))
        }
      </Table.Row>
    ));

    return (
      <div>
        <Header as="h1"> {title} </Header>
        <Table celled selectable color={color}>
          <Table.Header>
            <Table.Row>
              {tableHeaders}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableBody}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

TableComponent.defaultProps = {
};

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  color: PropTypes.string
};
export default TableComponent;
