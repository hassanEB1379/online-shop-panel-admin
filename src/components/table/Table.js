import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Fab,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTable, useRowSelect } from 'react-table';

const Table = ({ columns, data, deleteHandler }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // render rest columns
        ...columns,
        // Let's make a column for selection
        {
          id: 'selection',

          Header: () => (
            <Fab size="small" color="secondary">
              <Delete />
            </Fab>
          ),

          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
      ]);
    }
  );

  return (
    <div style={{ overflowX: 'auto' }}>
      <MuiTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </div>
  );
};

export default Table;
