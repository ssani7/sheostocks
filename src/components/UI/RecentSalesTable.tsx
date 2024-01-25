import { TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
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
	{ id: 'name', label: 'Customer' },
	{
		id: 'model',
		label: 'Product',
	},
	{
		id: 'amount',
		label: 'Amount',
	},
	{
		id: 'date',
		label: 'Date',
		minWidth: 150,
	},
	{
		id: 'status',
		label: 'Status',
	},
];

// interface Data {
// 	name: string;
// 	id: string;
// 	amount: number;
// 	status: number;
// 	density: number;
// }

function createData(name: string, id: string, model: string | number, amount: number, status: string) {
	const date = new Date();
	const formattedDate = moment(date).format('MMM Do, YYYY');
	return { name, id, model, amount, date: formattedDate, status };
}

const rows: any = [
	createData('India', 'IN', 1324171354, 3287263, 'Sold'),
	createData('China', 'CN', 1403500365, 9596961, 'Sold'),
	createData('Italy', 'IT', 60483973, 301340, 'Sold'),
	createData('United States', 'US', 327167434, 9833520, 'Sold'),
	createData('Canada', 'CA', 37602103, 9984670, 'Sold'),
	createData('Australia', 'AU', 25475400, 7692024, 'Sold'),
	createData('Germany', 'DE', 83019200, 357578, 'Sold'),
	createData('Ireland', 'IE', 4857000, 70273, 'Sold'),
	createData('Mexico', 'MX', 126577691, 1972550, 'Sold'),
	createData('Japan', 'JP', 126317000, 377973, 'Sold'),
	createData('France', 'FR', 67022000, 640679, 'Sold'),
	createData('United Kingdom', 'GB', 67545757, 242495, 'Sold'),
	createData('Russia', 'RU', 146793744, 17098246, 'Sold'),
	createData('Nigeria', 'NG', 200962417, 923768, 'Sold'),
	createData('Brazil', 'BR', 210147125, 8515767, 'Sold'),
];

export default function RecentSalesTable() {
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
		<Paper sx={{ boxShadow: 'none', width: '100%' }}>
			<TableContainer sx={{ maxHeight: 440, overflowX: 'auto' }}>
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
											<TableCell className={`!text-gray-400`} key={column.id} align={column.align}>
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
