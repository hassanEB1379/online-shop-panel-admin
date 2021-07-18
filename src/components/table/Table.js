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
  const { getTableProps, headerGroups, rows, prepareRow, selectedFlatRows } =
    useTable(
      {
        columns,
        data,
      },
      useRowSelect
    );

  const handleDelete = () => {
    const ids = selectedFlatRows.map(row => row.values.id);

    deleteHandler(ids);
  };

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

              <TableCell>
                <Fab size="small" color="secondary" onClick={handleDelete}>
                  <Delete />
                </Fab>
              </TableCell>
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

                <TableCell>
                  <Checkbox {...row.getToggleRowSelectedProps()} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </div>
  );
};

export default Table;
