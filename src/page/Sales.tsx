import { TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
import { useState } from 'react';
import SalesCategory from '../components/UI/Sales/SaleCategoryDropdow';
import { useGetSaleByCategoryQuery } from '../redux/api/salesAPI';
import { ISale, SaleCategory } from '../types/sales';

const Sales = () => {
	const [category, setCategory] = useState<SaleCategory>('weekly');
	const { data } = useGetSaleByCategoryQuery(category);

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const rows = data?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	return (
		<div>
			<p>Sales</p>
			<SalesCategory {...{ category, setCategory }} />
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Image</TableCell>
							<TableCell align="right">Product</TableCell>
							<TableCell align="right">Customer</TableCell>
							<TableCell align="right">Quantity</TableCell>
							<TableCell align="right">Sale Amount</TableCell>
							<TableCell align="right">Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows?.map((row: ISale) => (
							<TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									<img className="h-16 w-16" src={row?.product[0]?.image || ''} alt="" />
								</TableCell>
								<TableCell align="right">{row?.product[0]?.model}</TableCell>
								<TableCell align="right">{row.customer}</TableCell>
								<TableCell align="right">{row.sale_quantity}</TableCell>
								<TableCell align="right">{row.sale_amount.toFixed(2)}</TableCell>
								<TableCell align="right">{moment(row.date).format('MMM DD, YYYY')}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={data?.data?.length || 0}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</div>
	);
};

export default Sales;
