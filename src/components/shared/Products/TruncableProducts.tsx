import { Button, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

type Props = {
	products: any;
	title: string;
};

const TruncableProducts = ({ products, title }: Props) => {
	const [truncatedProducts, setTruncateProducts] = useState([]);

	useEffect(() => {
		const initProducts = products?.length ? products.slice(0, 3) : [];
		setTruncateProducts(initProducts);
	}, [products]);

	return (
		<div>
			<div className="flex items-center justify-between">
				<Typography variant="h6" fontWeight={700}>
					{title}
				</Typography>
				<Button onClick={() => setTruncateProducts(products)} variant="text" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
					View All
				</Button>
			</div>
			<Grid container spacing={4} sx={{ marginTop: 0.5 }}>
				{truncatedProducts?.map((product: any) => (
					<Grid key={product._id} item xs={4}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default TruncableProducts;
