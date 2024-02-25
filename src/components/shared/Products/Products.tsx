import { Box, Typography } from '@mui/material';
import { useGetProductsQuery } from '../../../redux/features/products/productsAPI';
import ProductCard from './ProductCard';

const Products = () => {
	const { data } = useGetProductsQuery('');
	const products = data?.data || [];
	return (
		<Box sx={{ marginY: '3rem' }}>
			<Typography sx={{ marginBottom: '3rem' }} variant="h4" textAlign="center">
				All Products
			</Typography>
			<div className="w-full grid grid-cols-5 gap-4">
				{products?.map((product: any) => (
					<ProductCard product={product} />
				))}
			</div>
		</Box>
	);
};

export default Products;
