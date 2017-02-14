import React, { PropTypes } from 'react';
import { Table } from 'semantic-ui-react';

class TableComponent extends React.Component {

  render() {
    const { data, headers } = this.props;
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
      <Table celled>
        <Table.Header>
          <Table.Row>
            {tableHeaders}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableBody}
        </Table.Body>
      </Table>
    );
  }
}

TableComponent.defaultProps = {
};

TableComponent.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};
export default TableComponent;
