import { Box, Button, Container, Rating, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductDesc from '../components/UI/Products/ProductDesc';
import PageTitle from '../components/shared/PageTitle';
import { useGetProductByIDQuery } from '../redux/features/products/productsAPI';

const ProductDetails = () => {
	const { productId } = useParams();

	const { data } = useGetProductByIDQuery(productId);
	const product = data?.data || {};
	console.log('🚀 ~ ProductDetails ~ data:', product);
	return (
		<div>
			<Container sx={{ paddingY: '1rem' }} maxWidth="xl">
				<PageTitle title="Product Details" />

				<Box sx={{ display: 'flex', paddingY: '2.5rem', gap: '3rem' }}>
					<div className="w-1/2">
						<img className="w-full rounded-xl" src={product.image} alt="" />
					</div>
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between">
							<Typography>{product.style}</Typography>
							<Rating name="read-only" value={4} readOnly />
						</div>
						<Typography variant="h3" fontWeight={700}>
							{product.name}
						</Typography>
						<Typography variant="h5" fontWeight={600} color="green">
							${product.price}
						</Typography>
						<Typography variant="body1" color="#838a95">
							Your willingness to feel better will be your guide out of despair and joy. Feeling your feelings is essential to moving up the scale.
						</Typography>
						<div className="flex gap-5 my-3">
							<Button variant="contained">Add to Cart</Button>
							<Button>Add to WIshlist </Button>
						</div>
						<div className="flex flex-col gap-3">
							<Typography variant="body1">
								<strong>Product ID:</strong> {product._id}
							</Typography>
							<Typography variant="body1">
								<strong>Category: </strong>
								{product.style},{product.material}
							</Typography>
							<Typography variant="body1">
								<strong>Availability: </strong>In Stock
							</Typography>
						</div>
					</div>
				</Box>
				<ProductDesc />
			</Container>
		</div>
	);
};

export default ProductDetails;
