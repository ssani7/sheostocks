import { Box } from '@mui/material';
import { useGetProductsByFilterQuery, useGetProductsQuery } from '../../../redux/features/products/productsAPI';
import ProductCard from './ProductCard';

const AllProducts = ({ category }: { category?: string }) => {
	const { data: filterData } = useGetProductsByFilterQuery({ style: category });
	const { data: alldata } = useGetProductsQuery('');
	const products = category ? filterData?.data || [] : alldata?.data || [];
	return (
		<Box sx={{ marginY: '3rem' }}>
			<div className="w-full grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products?.map((product: any) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</Box>
	);
};

export default AllProducts;
