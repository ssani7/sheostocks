import { Typography } from '@mui/material';
import Banner from '../components/UI/Banner';
import CategorySlides from '../components/UI/Sliders/CategorySlides';
import AllProducts from '../components/shared/Products/AllProducts';

const Home = () => {
	return (
		<div className="mx-5 lg:mx-10 xl:mx-20 mt-5">
			<Banner />
			<CategorySlides />
			<Typography sx={{ marginTop: '5rem', marginBottom: '3rem' }} variant="h4" textAlign="center">
				All Products
			</Typography>
			<AllProducts />
		</div>
	);
};

export default Home;
