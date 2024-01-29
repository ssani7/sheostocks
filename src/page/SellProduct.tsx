import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Autocomplete, Button, CircularProgress, Divider, InputAdornment, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import { useState } from 'react';
// import products from '../../public/products.json';
import SellProductTable from '../components/UI/SellProductTable';
import { useMakeSaleMutation } from '../redux/api/salesAPI';
import { useGetProductsQuery } from '../redux/features/products/productsAPI';
import { resetSaleState, setSaleState } from '../redux/features/sale/saleSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IProduct } from '../types/Product';

const warehouseOptions = ['Uttara Warehouse', 'Mirpur Warehouse'];

const SellProduct = () => {
	const { data, isLoading: loading } = useGetProductsQuery('');
	const products: IProduct[] = data?.data || [];

	const [postSale, { isSuccess, isError, error, reset }] = useMakeSaleMutation();
	const dispatch = useAppDispatch();

	if (isSuccess) {
		dispatch(resetSaleState());
		reset();
		toast.success('Sale made successfully');
	}
	if (isError) {
		// dispatch(resetSaleState());
		reset();
		toast.error(error?.data?.message);
	}

	// const [warehouse, setWarehouse] = useState('');
	// const [customer, setCustomer] = useState('');
	// const [date, setDate] = useState<Date>();
	// const [selected, setSelected] = useState<IProduct | null>(null);
	const [open, setOpen] = useState<boolean>(false);

	const { warehouse, customer, date, selected, sale_quantity } = useAppSelector((state) => state.sale);

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setSaleState({ warehouse: event.target.value as string }));
	};

	const makeSale = async () => {
		if (!selected || !customer || !warehouse || !date) return toast.error('Please fill all the fields before making a sale');
		if (sale_quantity > selected.quantity || sale_quantity < 0) return toast.error('Sale quantity must be greater than zero and lower than current stock');

		try {
			const saleData = {
				date,
				customer,
				warehouse,
				product_id: selected.id,
				sale_quantity,
				sale_amount: sale_quantity * selected.price,
			};

			await postSale({ saleData });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<p className="mt-6 mb-4 text-xl font-semibold">Create a Sale</p>
			<Divider flexItem />

			<div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-3">
				<div>
					<p className="mb-2 text-sm">Date</p>
					<OutlinedInput
						type="date"
						placeholder="mm/dd/yyyy"
						onChange={(e) => dispatch(setSaleState({ date: e.target.value as unknown as Date }))}
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
						}}
						className="w-full bg-white border-0"
					/>
				</div>
				<div>
					<p className="mb-2 text-sm">Customer</p>
					<OutlinedInput
						value={customer}
						placeholder="John Doe"
						onChange={(e) => dispatch(setSaleState({ customer: e.target.value }))}
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
						}}
						className="w-full bg-white border-0"
					/>
				</div>
				<div>
					<p className="mb-2 text-sm">Warehouse</p>
					<Select
						displayEmpty
						placeholder="Select a warehouse"
						className="bg-white w-full"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
						}}
						renderValue={(selected) => {
							if (selected.length === 0) {
								return <span className="text-gray-400">Choose a warehouse</span>;
							}

							return selected;
						}}
						value={warehouse}
						onChange={handleChange}
						input={<OutlinedInput />}
						inputProps={{ 'aria-label': 'Without label' }}>
						{warehouseOptions.map((name) => (
							<MenuItem key={name} value={name}>
								{name}
							</MenuItem>
						))}
					</Select>
				</div>
			</div>
			<div className="mt-6">
				<p className="mb-3 text-sm">Choose Product</p>
				<Autocomplete
					sx={{ width: '100%' }}
					open={open}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
					// isOptionEqualToValue={(option, value) => option.name === value.name}
					loading={loading}
					getOptionLabel={(option) => option.name}
					options={products}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder={'Search a product to make sale'}
							sx={{
								'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
							}}
							onChange={() => setOpen(true)}
							className="w-full bg-white border-0"
							{...params}
							// label="Asynchronous"
							InputProps={{
								...params.InputProps,
								startAdornment: (
									<InputAdornment position="start">
										<SearchOutlinedIcon />
									</InputAdornment>
								),
								endAdornment: <InputAdornment position="start">{loading ? <CircularProgress color="inherit" size={20} /> : null}</InputAdornment>,
							}}
						/>
					)}
					renderOption={(props, option) => (
						<li
							{...props}
							onClick={() => {
								dispatch(setSaleState({ selected: option }));
								setOpen(false);
							}}
							className={`flex items-center justify-between border-b last:border-b-0 gap-3 p-2 cursor-pointer`}>
							<img className="h-8 w-8" src={option.image} alt="" />
							<p className="w-1/5">{option.name}</p>
							<p className="w-1/5">{option.brand}</p>
							<p className="w-1/5">{option.size}</p>
						</li>
					)}
					noOptionsText={<p>Nothing found</p>}
				/>
			</div>

			<div className="my-6">
				<p className="text-xl font-semibold mb-4">Selected Products For Sale</p>

				<SellProductTable />
			</div>

			<Button onClick={makeSale} sx={{ bgcolor: '#6466e9', fontWeight: 600, '&:hover': { bgcolor: '#6466e9' } }} variant="contained">
				Make Sale
			</Button>
		</div>
	);
};

export default SellProduct;
