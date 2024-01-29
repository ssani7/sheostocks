import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/UI/ProductForm';
import { useGetProductByIDQuery } from '../redux/features/products/productsAPI';
import { setProduct } from '../redux/features/purchase/purchaseSlice';
import { useAppDispatch } from '../redux/hooks';

const UpdateProduct = () => {
	const { id } = useParams();
	const { data } = useGetProductByIDQuery(id);

	const dispatch = useAppDispatch();

	if (data?.data) dispatch(setProduct(data.data));

	return (
		<div>
			<p className="mt-6 mb-4 text-xl font-semibold">Add product</p>
			<Divider flexItem />
			<ProductForm isUpdate={true} />
		</div>
	);
};

export default UpdateProduct;
