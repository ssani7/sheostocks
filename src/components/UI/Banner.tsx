import { Box, Typography } from '@mui/material';
import heroImage from '../../assets/categories/hero_sneakers.png';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<Box
			sx={{
				bgcolor: '#8b97e2',
				borderRadius: '0.5rem',
				paddingX: {
					xs: '1rem',
					sm: '2rem',
					md: '4rem',
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
				position: 'relative',
			}}>
			<Box sx={{ maxWidth: { xs: '100%', md: '50%' }, width: { xs: '100%', sm: '50%' }, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
				<Typography
					sx={{
						fontSize: {
							xs: '1.75rem',
							// sm: '2rem',
							md: '2.5rem',
							lg: '3rem',
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
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ut sint necessitatibus natus ducimus harum rerum veniam sit aliquam accusamus ipsam, cupiditate nisi quibusdam
					voluptas sequi cum cumque animi repellat!
				</Typography>
				<Link to="/products">
					{/* <Button
						sx={{
							width: 'fit-content',
							textTransform: 'capitalize',
							paddingY: {
								xs: '0.5rem',
								xl: 1.8,
							},
							paddingX: {
								xs: 3,
								xl: 5,
							},
							fontWeight: 700,
						}}
						variant="contained">
						Shop Now
					</Button> */}
					<button className="primary-btn">Shop Now</button>
				</Link>
			</Box>
			<img className="h-full min-[600px]:w-auto md:w-2/5 max-h-[200px] md:max-h-[500px] object-contain" src={heroImage} alt="hero image for shoes" />
		</Box>
	);
};

export default Banner;
