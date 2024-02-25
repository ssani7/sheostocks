import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import FullScreenLoader from '../components/UI/FullScreenLoader';
import ProductForm from '../components/UI/ProductForm';
import { useGetProductByIDQuery } from '../redux/features/products/productsAPI';
import { setProduct } from '../redux/features/purchase/purchaseSlice';
import { useAppDispatch } from '../redux/hooks';

const DuplicatePage = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetProductByIDQuery(id);

	const dispatch = useAppDispatch();

	if (isLoading) return <FullScreenLoader open={isLoading} />;
	if (data?.data) dispatch(setProduct({ ...data.data, _id: '' }));

	return (
		<div>
			<p className="mt-6 mb-4 text-xl font-semibold">Add product</p>
			<Divider flexItem />
			<ProductForm />
		</div>
	);
};

export default DuplicatePage;
