import PropTypes from 'prop-types';
// Items → Array of Object Items that has been process.
import React from 'react';
import { Table } from 'antd';

const DataTable = ({ columns, items }) => {
  return <Table columns={columns} dataSource={items} />;
}

DataTable.propTypes = {
    Items: PropTypes.array,
    columns: PropTypes.array
}

export default DataTable;