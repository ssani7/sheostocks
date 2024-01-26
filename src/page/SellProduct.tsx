import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Autocomplete, Divider, InputAdornment, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';

import { useState } from 'react';
import products from '../../public/products.json';
import SellProductTable from '../components/UI/SellProductTable';

const salesFormData = [
	{ title: 'Date', placeholder: 'mm/dd/yyyy', type: 'date' },
	{ title: 'Customer', placeholder: 'John Doe', type: 'text' },
];

const warehouseOptions = ['Uttara Warehouse', 'Mirpur Warehouse'];

const SellProduct = () => {
	const [warehouse, setWarehouse] = useState('');
	// const [searchResults, setSearchResults] = useState<any[]>([]);
	// const [loading, setLoading] = useState<boolean>(false);
	const [selected, setSelected] = useState<any[]>([]);
	const [open, setOpen] = useState<boolean>(false);

	const selectedIds = selected.map((p) => p.name);

	const handleChange = (event: SelectChangeEvent) => {
		setWarehouse(event.target.value as string);
	};

	return (
		<div>
			<p className="mt-6 mb-4 text-xl font-semibold">Create a Sale</p>
			<Divider flexItem />

			<div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-3">
				{salesFormData.map((s) => (
					<div>
						<p className="mb-2 text-sm">{s.title}</p>
						<OutlinedInput
							type={s.type}
							placeholder={s.placeholder}
							sx={{
								'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
							}}
							className="w-full bg-white border-0"
						/>
					</div>
				))}
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
					multiple
					sx={{ width: '100%' }}
					open={open}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
					// isOptionEqualToValue={(option, value) => option.name === value.name}
					// loading={loading}
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
								// endAdornment: <InputAdornment position="start">{loading ? <CircularProgress color="inherit" size={20} /> : null}</InputAdornment>,
							}}
						/>
					)}
					renderOption={(props, option) => (
						<li
							{...props}
							onClick={() => setSelected((prev) => [...prev, option])}
							className={`flex items-center justify-between border-b last:border-b-0 gap-3 p-2 cursor-pointer ${selectedIds.includes(option.name) && 'pointer-events-none bg-[#bbbced]'}`}>
							<img src="/public/vite.svg" alt="" />
							<p className="w-1/5">{option.name}</p>
							<p className="w-1/5">{option.brand}</p>
							<p className="w-1/5">{option.size}</p>
						</li>
					)}
					noOptionsText={<p>Nothing found</p>}
				/>
			</div>

			<div className="mt-6">
				<p className="text-xl font-semibold mb-4">Selected Products For Sale</p>

				<SellProductTable products={selected} setSelected={setSelected} />
			</div>
		</div>
	);
};

export default SellProduct;
