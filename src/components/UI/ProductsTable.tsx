import CancelIcon from '@mui/icons-material/CancelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import * as React from 'react';

interface Data {
	id: string | number;
	name: string;
	image: string;
	size: string;
	brand: string;
	category: string;
	price: number;
	quantity: number;
	action?: number;
}

function createData(id: number, name: string, quantity: number, price: number, brand: string, category: string, image: string, size: string): Data {
	return {
		id,
		name,
		brand,
		category,
		quantity,
		size,
		image,
		price,
	};
}

const rows = [
	createData(1, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(2, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(3, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(4, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(5, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(6, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(7, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(8, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(9, 'Nike Air Max', 23, 400, 'Nike', 'Casual', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 32'),
	createData(10, 'Adidas Sports ultra', 12, 340, 'Adidas', 'Sports', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 34'),
	createData(11, 'Adidas Sports ultra', 12, 340, 'Adidas', 'Sports', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 34'),
	createData(12, 'Adidas Sports ultra', 12, 340, 'Adidas', 'Sports', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 34'),
	createData(13, 'Adidas Sports ultra', 12, 340, 'Adidas', 'Sports', 'https://vue.hibootstrap.com/pyle/img/product-thumb-1.bfdce747.webp', 'men 34'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(order: Order, orderBy: Key): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
	return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly Data[], comparator: (a: T, b: T) => number) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: 'image',
		numeric: false,
		disablePadding: false,
		label: 'Image',
	},
	{
		id: 'name',
		numeric: false,
		disablePadding: false,
		label: 'Name',
	},
	{
		id: 'id',
		numeric: false,
		disablePadding: false,
		label: 'ID',
	},
	{
		id: 'size',
		numeric: false,
		disablePadding: false,
		label: 'Size',
	},
	{
		id: 'brand',
		numeric: false,
		disablePadding: false,
		label: 'Brand',
	},
	{
		id: 'category',
		numeric: false,
		disablePadding: false,
		label: 'Category',
	},
	{
		id: 'price',
		numeric: true,
		disablePadding: false,
		label: 'Price',
	},
	{
		id: 'quantity',
		numeric: true,
		disablePadding: false,
		label: 'Quantity',
	},
	{
		id: 'action',
		numeric: true,
		disablePadding: false,
		label: 'Action',
	},
];

interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	const createSortHandler = (shouldSort: boolean, property: keyof Data) => (event: React.MouseEvent<unknown>) => {
		if (!shouldSort) return;

		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all desserts',
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} padding={headCell.disablePadding ? 'none' : 'normal'} sortDirection={orderBy === headCell.id ? order : false}>
						<TableSortLabel
							hideSortIcon={!headCell.numeric}
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.numeric, headCell.id)}>
							{headCell.label}
							{orderBy === headCell.id && headCell.numeric ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

interface EnhancedTableToolbarProps {
	numSelected: number;
	setSelected: (_selected: number[]) => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
	const { numSelected, setSelected } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
				}),
			}}>
			{numSelected > 0 ? (
				<Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
					{numSelected} selected
				</Typography>
			) : (
				<Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
					Products List
				</Typography>
			)}
			{numSelected > 0 ? (
				<div className="flex items-center">
					<Tooltip title="Cancel Delete">
						<IconButton onClick={() => setSelected([])}>
							<CancelIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Delete">
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</div>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}
export default function ProductsTable() {
	const [order, setOrder] = React.useState<Order>('asc');
	const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
	const [selected, setSelected] = React.useState<readonly (number | string)[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, id: number | string) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected: readonly (number | string)[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}
		setSelected(newSelected);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};

	const isSelected = (id: number | string) => selected.indexOf(id) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const visibleRows = React.useMemo(() => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [order, orderBy, page, rowsPerPage]);

	return (
		<div>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<EnhancedTableToolbar numSelected={selected.length} setSelected={setSelected} />
				<TableContainer sx={{ overflowX: 'auto' }}>
					<Table aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
						<EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={handleSelectAllClick} onRequestSort={handleRequestSort} rowCount={rows.length} />
						<TableBody>
							{visibleRows.map((row, index) => {
								const isItemSelected = isSelected(row.id);
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										onClick={(event) => handleClick(event, row.id)}
										role="checkbox"
										aria-checked={isItemSelected}
										tabIndex={-1}
										key={row.id}
										selected={isItemSelected}
										sx={{ cursor: 'pointer' }}>
										<TableCell sx={{ paddingRight: '24px' }} padding="checkbox">
											<Checkbox
												color="primary"
												checked={isItemSelected}
												inputProps={{
													'aria-labelledby': labelId,
												}}
											/>
										</TableCell>
										<TableCell component="th" id={labelId} scope="row" padding="none">
											<img src={row.image as string} alt="" />
										</TableCell>
										<TableCell align="left">{row.name}</TableCell>
										<TableCell align="left">{row.id}</TableCell>
										<TableCell align="left">{row.size}</TableCell>
										<TableCell align="left">{row.brand}</TableCell>
										<TableCell align="left">{row.category}</TableCell>
										<TableCell align="right">{row.price}</TableCell>
										<TableCell align="right">{row.quantity}</TableCell>
										<TableCell align="right">
											<Button>Action</Button>
										</TableCell>
									</TableRow>
								);
							})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
		</div>
	);
}
