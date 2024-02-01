import DuplicateIcon from '@mui/icons-material/ContentCopyOutlined';
import EditIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Backdrop, Button, Checkbox, CircularProgress, IconButton, TablePagination, Tooltip } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDeleteBulkProductMutation, useDeleteProductMutation, useGetProductsByFilterQuery } from '../../redux/features/products/productsAPI';
import { useAppSelector } from '../../redux/hooks';
import { IProduct } from '../../types/Product';
import FilterPopup from './Products/FilterPopup';

const ProductsTable = () => {
	const filter = useAppSelector((state) => state.productFilter);

	const { data } = useGetProductsByFilterQuery(filter, { refetchOnMountOrArgChange: true, pollingInterval: 30000 });

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [selected, setSelected] = useState<string[]>([]);
	console.log('🚀 ~ ProductsTable ~ selected:', selected);

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const rows = data?.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	const [deleteProduct, { isLoading, isSuccess, isError, error, reset }] = useDeleteProductMutation();
	const [deleteBulk, { isLoading: isDeletingBulk, isSuccess: isDeleteSuccess, isError: isDeleteError, error: deleteError, reset: resetDelete }] = useDeleteBulkProductMutation();

	if (isSuccess || isDeleteSuccess) {
		reset();
		resetDelete();
		toast.success('Product deleted successfully');
	}
	if (isError || isDeleteError) {
		reset();
		resetDelete();
		toast.error(isError ? (error as any)?.data?.message : (deleteError as any)?.data?.message);
	}

	const handleProductDelete = async (_id: string) => {
		try {
			await deleteProduct(_id);
		} catch (error) {
			console.log(error);
		}
	};

	const handleBulkDelete = async () => {
		try {
			await deleteBulk(selected);
			setSelected([]);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
		if (e.target.checked) {
			setSelected((prev) => [...prev, id]);
		} else if (selected.includes(id)) {
			setSelected((prev) => prev.filter((p) => p !== id));
		}
	};

	return (
		<div>
			<div className="w-full flex items-center justify-between">
				<FilterPopup />
				<Button onClick={handleBulkDelete} color="error" sx={{ display: selected?.length ? 'inline-block' : 'none', textTransform: 'capitalize' }} variant="outlined">
					Delete
				</Button>
			</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow
							sx={{
								'& th': { fontWeight: '600 !important', fontSize: '1rem' },
							}}>
							<TableCell></TableCell>
							<TableCell>Image</TableCell>
							<TableCell align="right">Model</TableCell>
							<TableCell align="right">Brand</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Stock</TableCell>
							<TableCell align="right">Style</TableCell>
							<TableCell align="right">Color</TableCell>
							<TableCell align="right">Material</TableCell>
							<TableCell align="right">Size</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows?.map((row: IProduct & { _id: string }) => (
							<TableRow hover selected={selected?.includes(row._id)} key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row">
									<Checkbox onChange={(e) => handleChecked(e, row._id)} sx={{ color: '#4e46dc !important' }} />
								</TableCell>
								<TableCell component="th" scope="row">
									<img className="h-16 w-16" src={row?.image || ''} alt="" />
								</TableCell>
								<TableCell align="right">{row?.model}</TableCell>
								<TableCell align="right">{row.brand}</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell align="right">{row.quantity}</TableCell>
								<TableCell align="right">{row.style}</TableCell>
								<TableCell align="right">{row.color}</TableCell>
								<TableCell align="right">{row.material}</TableCell>
								<TableCell align="right">{row.size}</TableCell>
								<TableCell align="center">
									<Tooltip title="Duplicate this product">
										<IconButton aria-label="delete">
											<DuplicateIcon color="info" />
										</IconButton>
									</Tooltip>
									<Tooltip title="Edit this product">
										<Link to={`/products/update/${row._id}`}>
											<IconButton aria-label="update">
												<EditIcon color="success" />
											</IconButton>
										</Link>
									</Tooltip>
									<Tooltip onClick={() => handleProductDelete(row._id)} title="Delete this product">
										<IconButton aria-label="delete">
											<DeleteIcon color="error" />
										</IconButton>
									</Tooltip>
								</TableCell>
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
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading || isDeletingBulk}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};

export default ProductsTable;
