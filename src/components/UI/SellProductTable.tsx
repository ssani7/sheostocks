import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PlusIcon from '@mui/icons-material/ControlPointOutlined';
import MinusIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { OutlinedInput } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent } from 'react';
import { IProduct } from '../../types/Product';

type SellTableProps = {
	products: IProduct[];
	setSelected: (_product: IProduct[]) => void;
};

const SellProductTable = ({ products, setSelected }: SellTableProps) => {
	const handleDeleteProduct = (product: IProduct) => {
		const newProducts = products.filter((p) => p.name !== product.name);
		setSelected(newProducts);
	};

	const handleQuantity = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const productsCopy = [...products];
		productsCopy[index].quantity = Number(e.target.value);
		setSelected(productsCopy);
	};

	return products?.length ? (
		<TableContainer component={Paper}>
			<Table sx={{ width: '100%' }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Product Name</TableCell>
						<TableCell align="right">ID</TableCell>
						<TableCell align="right">Unit Cost</TableCell>
						<TableCell align="center">Quantity</TableCell>
						<TableCell align="right">Subtotal</TableCell>
						<TableCell align="center">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products?.map((row: any, i: number) => (
						<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{i}</TableCell>
							<TableCell align="right">{row.price}</TableCell>
							<TableCell align="center">
								<div className=" w-fit mx-auto">
									<MinusIcon />
									<OutlinedInput type="number" onChange={(e) => handleQuantity(i, e)} defaultValue={row.quantity} className="mx-5 w-fit max-w-20" />
									<PlusIcon />
								</div>
							</TableCell>
							<TableCell align="right">{(row.price * row.quantity).toFixed(2)}</TableCell>
							<TableCell align="center">
								<CancelOutlinedIcon onClick={() => handleDeleteProduct(row)} className="cursor-pointer" htmlColor="red" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	) : (
		''
	);
};

export default SellProductTable;
