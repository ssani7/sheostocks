import { Box, Container, Typography } from '@mui/material';
import PathBreadcrumb from '../components/shared/PathBreadcrumb';
import AllProducts from '../components/shared/Products/AllProducts';

const Products = () => {
	return (
		<Container className="mt-10" maxWidth="xl">
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="h5" fontWeight={700}>
					Our Products
				</Typography>
				<PathBreadcrumb />
			</Box>
			<AllProducts />
		</Container>
	);
};

export default Products;
