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
	selected: IProduct | null;
	setSelected: (_product: IProduct | null) => void;
};

const SellProductTable = ({ selected, setSelected }: SellTableProps) => {
	const handleDeleteProduct = () => {
		setSelected(null);
	};

	const handleQuantity = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (!selected) return;

		setSelected({ ...selected, quantity: Number(e.target.value) });
	};

	return selected ? (
		<TableContainer component={Paper}>
			<Table sx={{ width: '100%' }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Product Name</TableCell>
						<TableCell align="center">ID</TableCell>
						<TableCell align="right">Unit Cost</TableCell>
						<TableCell align="center">Quantity</TableCell>
						<TableCell align="right">Subtotal</TableCell>
						<TableCell align="center">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
						<TableCell component="th" scope="row">
							{selected.name}
						</TableCell>
						<TableCell align="center">{selected.id}</TableCell>
						<TableCell align="right">{selected.price}</TableCell>
						<TableCell align="center">
							<div className=" w-fit mx-auto">
								<MinusIcon />
								<OutlinedInput type="number" onChange={(e) => handleQuantity(e)} defaultValue={selected.quantity} className="mx-5 w-fit max-w-20" />
								<PlusIcon />
							</div>
						</TableCell>
						<TableCell align="right">{(selected.price * selected.quantity).toFixed(2)}</TableCell>
						<TableCell align="center">
							<CancelOutlinedIcon onClick={() => handleDeleteProduct()} className="cursor-pointer" htmlColor="red" />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	) : (
		''
	);
};

export default SellProductTable;
