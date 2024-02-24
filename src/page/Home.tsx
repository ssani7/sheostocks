import { Box, Button, Container, Typography } from '@mui/material';
import heroImage from '../assets/categories/hero_sneakers.png';
import CategorySlides from '../components/UI/Sliders/CategorySlides';

const Home = () => {
	return (
		<Container sx={{ marginTop: '1rem', paddingBottom: '5rem' }} maxWidth="xl">
			<Box sx={{ bgcolor: '#8b97e2', borderRadius: '0.5rem', paddingX: '5rem', paddingY: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Box sx={{ maxWidth: '50%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
					<Typography variant="h3" color="white" fontWeight={700}>
						The Best Electronics Shop For Online Purchase
					</Typography>
					<Typography lineHeight={1.6} variant="body1" color="white" fontWeight={200}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mi viverra gravida rutrum lorem. Amet sed morbi dignissim tortor nisl. Faucibus donec et, est cras facilisis. Iaculis
						tristique.
					</Typography>
					<Button sx={{ width: 'fit-content', textTransform: 'capitalize' }} variant="contained">
						Shop Now
					</Button>
				</Box>
				<img className="w-1/2" src={heroImage} alt="hero image for shoes" />
			</Box>

			<CategorySlides />
		</Container>
	);
};

export default Home;
