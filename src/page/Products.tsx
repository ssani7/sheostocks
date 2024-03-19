import { Box, Container, Typography } from '@mui/material';
import PathBreadcrumb from '../components/shared/PathBreadcrumb';
import AllProducts from '../components/shared/Products/AllProducts';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');

	return (
		<Container className="mt-10" maxWidth="xl">
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="h5" fontWeight={700}>
					Our Products
				</Typography>
				<PathBreadcrumb />
			</Box>
			<AllProducts category={category ?? undefined} />
		</Container>
	);
};

export default Products;
