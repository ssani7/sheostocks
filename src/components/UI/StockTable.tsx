import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

interface Column {
	id: string;
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: 'id', label: 'ID', minWidth: 80 },
	{ id: 'model', label: 'Product' },
	{
		id: 'quantity',
		label: 'Quantity',
	},
	{
		id: 'alert',
		label: 'Alert Qnt',
	},
];

// interface Data {
// 	name: string;
// 	id: string;
// 	amount: number;
// 	status: number;
// 	density: number;
// }

function createData(name: string, id: string, quantity: number, alert: number) {
	return { model: name, id, quantity, alert };
}

const rows: any = [
	createData('India', 'IN', 12, 10),
	createData('China', 'CN', 12, 10),
	createData('Italy', 'IT', 12, 10),
	createData('United States', 'US', 12, 10),
	createData('Canada', 'CA', 12, 10),
	createData('Australia', 'AU', 12, 10),
	createData('Germany', 'DE', 12, 10),
	createData('Ireland', 'IE', 12, 10),
	createData('Mexico', 'MX', 12, 10),
	createData('Japan', 'JP', 12, 10),
	createData('France', 'FR', 12, 10),
	createData('United Kingdom', 'GB', 12, 10),
	createData('Russia', 'RU', 12, 10),
	createData('Nigeria', 'NG', 12, 10),
	createData('Brazil', 'BR', 12, 10),
];

export default function StockTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className="!shadow-none" sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell className={`!text-gray-400 ${column.id === 'alert' && '!text-red-500 !font-semibold'}`} key={column.id} align={column.align}>
												{column.format && typeof value === 'number' ? column.format(value) : value}
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
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
