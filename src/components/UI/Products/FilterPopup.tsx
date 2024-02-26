import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Divider, IconButton, Modal, TextField, Tooltip } from '@mui/material';
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

	const [value, setValue] = useState(200);

	return (
		<div className="my-5">
			<Tooltip title="Filter list" placement="bottom">
				<Button onClick={handleOpen} sx={{ paddingX: 2, paddingY: 1, display: 'flex', gap: 2, textTransform: 'capitalize' }} variant="outlined">
					Filter <FilterListIcon />
				</Button>
			</Tooltip>

			<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-full lg:max-w-[60%] min-w-96 bg-white p-10 rounded-lg shadow-lg min-h-28 lg:max-h-[90%] overflow-auto">
					<p className="text-xl mb-5 font-semibold">Filter</p>
					<IconButton onClick={handleClose} className="!absolute top-5 right-5">
						<CancelOutlinedIcon fontSize="medium" />
					</IconButton>
					<Divider />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 ">
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
