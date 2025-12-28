import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableComponentProps<T> = {
  columns: Column<T>[];
  data: T[];
  totalItems?: number;
  rowsPerPage?: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
  onClickRow?: (item: T) => void;

  take?: number;
  skip?: number;
};

export const TableComponent = <T,>({
  columns,
  data,
  totalItems,
  onPageChange,
  onRowsPerPageChange,
  onClickRow,
  take,
  skip,
}: TableComponentProps<T>) => {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const page = skip ? Math.floor(skip / (take || 10)) : 0;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={String(col.key)} align="left">
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((col) => {
                    return (
                      <TableCell key={String(col.key)} align="left">
                        {String(row[col.key])}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalItems || 0}
        rowsPerPage={take || 10}
        page={page}
        onPageChange={() => onPageChange(page)}
        onRowsPerPageChange={(event) => onRowsPerPageChange(Number(event.target.value))}
      />
    </Paper>
  );
};
