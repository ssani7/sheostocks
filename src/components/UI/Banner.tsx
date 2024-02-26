import { Box, Button, Typography } from '@mui/material';
import heroImage from '../../assets/categories/hero_sneakers.png';

const Banner = () => {
	return (
		<Box
			sx={{
				bgcolor: '#8b97e2',
				borderRadius: '0.5rem',
				paddingX: {
					xs: '1rem',
					sm: '3rem',
					md: '5rem',
				},
				paddingY: {
					xs: '2rem',
					md: '5rem',
					xl: '5rem',
				},
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: '2rem',
			}}>
			<Box sx={{ maxWidth: { xs: '100%', md: '50%' }, width: { xs: '100%', sm: '50%' }, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
				<Typography
					sx={{
						fontSize: {
							xs: '1.75rem',
							sm: '2rem',
							md: '3rem',
							lg: '3.75rem',
						},
					}}
					className="title"
					variant="h2"
					color="white"
					fontWeight={800}>
					The Best Online Shop For Your Shoe Purchase
				</Typography>
				<Typography
					sx={{
						fontSize: {
							xs: '0.7rem',
							md: '1rem',
						},
					}}
					lineHeight={1.6}
					color="white"
					fontWeight={100}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et mi viverra gravida rutrum lorem. Amet sed morbi dignissim tortor nisl. Faucibus donec et, est cras facilisis. Iaculis
					tristique.
				</Typography>
				<Button sx={{ width: 'fit-content', textTransform: 'capitalize' }} variant="contained">
					Shop Now
				</Button>
			</Box>
			<img className="h-full w-3/4 min-[600px]:w-1/2" src={heroImage} alt="hero image for shoes" />
		</Box>
	);
};

export default Banner;
