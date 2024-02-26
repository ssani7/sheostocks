import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import PathBreadcrumb from '../components/shared/PathBreadcrumb';
import { useGetProductByIDQuery } from '../redux/features/products/productsAPI';

const ProductDetails = () => {
	const { productId } = useParams();

	const { data } = useGetProductByIDQuery(productId);
	const product = data?.data || {};
	console.log('🚀 ~ ProductDetails ~ data:', product);
	return (
		<div>
			<Container sx={{ marginTop: '2rem' }} maxWidth="xl">
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant="h5" fontWeight={700}>
						Product Details
					</Typography>
					<div>
						<PathBreadcrumb />
					</div>
				</Box>
			</Container>
		</div>
	);
};

export default ProductDetails;
