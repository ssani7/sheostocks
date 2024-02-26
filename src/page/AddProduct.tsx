import ProductForm from '../components/UI/ProductForm';
import PageTitle from '../components/shared/PageTitle';
import { resetProduct } from '../redux/features/purchase/purchaseSlice';
import { useAppDispatch } from '../redux/hooks';

const AddProduct = () => {
	const dispatch = useAppDispatch();
	dispatch(resetProduct());
	return (
		<div>
			<PageTitle title="Add a Product" />
			<ProductForm />
		</div>
	);
};

export default AddProduct;
