import { Divider } from '@mui/material';
import ProductForm from '../components/UI/ProductForm';
import { resetProduct } from '../redux/features/purchase/purchaseSlice';
import { useAppDispatch } from '../redux/hooks';

const AddProduct = () => {
	const dispatch = useAppDispatch();
	dispatch(resetProduct());
	return (
		<div>
			<p className="mt-6 mb-4 text-xl font-semibold">Add product</p>
			<Divider flexItem />
			<ProductForm />
		</div>
	);
};

export default AddProduct;
