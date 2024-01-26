import { Divider } from '@mui/material';
import ProductForm from '../components/UI/ProductForm';

const AddProduct = () => {
	return (
		<div>
			<p className="mt-6 mb-4 text-xl font-semibold">Add product</p>
			<Divider flexItem />
			<ProductForm />
		</div>
	);
};

export default AddProduct;
