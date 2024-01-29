import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { useGetRecentSalesQuery } from '../../redux/api/salesAPI';

interface Column {
	id: string;
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: '_id', label: 'ID', minWidth: 80 },
	{ id: 'customer', label: 'Customer' },
	{
		id: 'product',
		label: 'Product',
	},
	{
		id: 'sale_amount',
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

export default function RecentSalesTable() {
	const { data } = useGetRecentSalesQuery('');
	const rows = data?.data || [];

	return (
		<Paper sx={{ boxShadow: 'none', width: '100%' }}>
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
						{rows.map((row: any) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
									<TableCell className={`!text-gray-400`} align="left">
										{row._id}
									</TableCell>
									<TableCell className={`!text-gray-400`} align="left">
										{row.customer}
									</TableCell>
									<TableCell className={`!text-gray-400`} align="left">
										{row.product[0]?.model}
									</TableCell>
									<TableCell className={`!text-gray-400`} align="left">
										{row.sale_amount.toFixed(2)}
									</TableCell>
									<TableCell className={`!text-gray-400`} align="left">
										{row?.date && moment(row.date).format('MMM DD, yyyy')}
									</TableCell>
									<TableCell className={`!text-gray-400`} align="left">
										<Button variant="outlined" color="success" size="small">
											Done
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
