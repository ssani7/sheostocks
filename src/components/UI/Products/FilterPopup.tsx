import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, IconButton, Modal, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';
import { setProductFilter } from '../../../redux/features/products/productFilter';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import PriceSlide from './PriceSlide';

const FilterPopup = () => {
	const dispatch = useAppDispatch();

	const filter = useAppSelector((state) => state.productFilter);

	let updatedFilter = { price: 30 };

	const handleFilter = async (e: any) => {
		updatedFilter = { ...updatedFilter, [e.target.name]: e.target.value };
	};

	// managing filter popup
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [value, setValue] = useState(30);

	return (
		<div className="my-5">
			<Tooltip title="Filter list">
				<IconButton onClick={handleOpen}>
					<FilterListIcon />
				</IconButton>
			</Tooltip>
			<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2/3 min-w-96 bg-white p-10 rounded-lg shadow-lg min-h-28 ">
					<div className="grid grid-cols-3 gap-10 mb-10">
						<TextField onChange={handleFilter} defaultValue={filter.model} name="model" label="Product Model" variant="outlined" />
						<TextField onChange={handleFilter} defaultValue={filter.style} name="style" label="Style" variant="outlined" />
						<TextField onChange={handleFilter} defaultValue={filter.brand} name="brand" label="Brand" variant="outlined" />
						<TextField onChange={handleFilter} defaultValue={filter.color} name="color" label="Color" variant="outlined" />
						<TextField onChange={handleFilter} defaultValue={filter.size} name="size" label="Size" variant="outlined" />
						<TextField onChange={handleFilter} defaultValue={filter.material} name="material" label="Material" variant="outlined" />
					</div>

					<PriceSlide {...{ value, setValue }} />

					<Button
						onClick={() => {
							dispatch(setProductFilter({ ...updatedFilter, price: value }));
							handleClose();
						}}
						sx={{ textTransform: 'capitalize', bgcolor: '#6466e9', fontWeight: 400, '&:hover': { bgcolor: '#6466e9' } }}
						variant="contained">
						Apply Filter
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default FilterPopup;
