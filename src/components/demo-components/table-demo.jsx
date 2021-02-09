import React from 'react';
import { Table } from 'antd';
import TableEditable from './table-editable';
import TableWithTag from './table-with-tag';
import TableWithSort from './table-with-sort';
import TableWithSelection from './table-with-selection';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const TableDemo = () => {
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(45vw, 1fr))",
        gridGap: "2rem"
    }}>
      <Table
        columns={columns}
        bordered
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
      <TableEditable />
      <TableWithTag />
      <TableWithSort />
      <TableWithSelection />
    </div>
  );
};

export default TableDemo;
