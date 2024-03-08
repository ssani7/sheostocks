import { Box, Button, Chip, Container, Divider, Grid, Typography } from '@mui/material';
import user from '../assets/user.jpg';
import { useGetProductsQuery } from '../redux/features/products/productsAPI';
import TruncableProducts from '../components/shared/Products/TruncableProducts';
import { Link } from 'react-router-dom';

const Profile = () => {
	const { data } = useGetProductsQuery('');
	const products = data?.data || [];
	return (
		<Container sx={{ paddingY: '1rem' }} maxWidth="xl">
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="h5" fontWeight={700}>
					Profile
				</Typography>
				<Link to="/edit-profile">
					<Button variant="outlined" sx={{ textTransform: 'capitalize' }}>
						Edit Profile
					</Button>
				</Link>
			</Box>
			<Divider sx={{ paddingY: 1 }} />
			<Grid container spacing={2} sx={{ marginTop: 1 }}>
				<Grid item xs={3}>
					<img className="w-full h-[230px] object-cover rounded-lg" src={user} alt="" />
				</Grid>

				<Grid item xs={9}>
					<div className="flex flex-col gap-5 w-full rounded-lg p-6 h-full bg-white">
						<div className="flex flex-col gap-2">
							<Typography variant="body1" color="grey">
								Full Name
							</Typography>
							<Typography variant="h4" fontWeight={700}>
								Sanaullah Sani
							</Typography>
						</div>
						<div className="flex w-full">
							<div className="flex flex-col gap-2  w-1/3">
								<Typography variant="body1" color="grey">
									Date of Birth
								</Typography>
								<Typography variant="body1">30/06/2001</Typography>
								<Typography variant="body1">24 years</Typography>
							</div>
							<div className="flex flex-col gap-2  w-1/3">
								<Typography variant="body1" color="grey">
									Address
								</Typography>
								<Typography variant="body1">Sector 12, Uttara, Dhaka 1230</Typography>
								<Typography variant="body1">Dhaka City</Typography>
							</div>
							<div className="flex flex-col gap-2 w-1/3">
								<Typography variant="body1" color="grey">
									Contact Information
								</Typography>
								<Typography variant="body1">sanaullah.sani756@gmail.com</Typography>
								<Typography variant="body1">+880 191 935 4759</Typography>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item xs={3}>
					<Box
						sx={{
							bgcolor: 'white',
							padding: 4,
							display: 'flex',
							flexDirection: 'column',
							gap: 4,
							borderRadius: 2,
							height: '100%',
						}}>
						<div className="flex items-center gap-4">
							<Typography variant="body1" color="grey">
								Status:
							</Typography>
							<Chip label="User" />
						</div>
						<div className="flex flex-col gap-1">
							<Typography variant="body1" color="grey">
								First Purchase
							</Typography>
							<Typography variant="body1">23 October, 2020</Typography>
							<Typography variant="body1">4 years ago</Typography>
						</div>
						<div className="flex flex-col gap-1">
							<Typography variant="body1" color="grey">
								Last Purchase
							</Typography>
							<Typography variant="body1">23 October, 2020</Typography>
							<Typography variant="body1">4 years ago</Typography>
						</div>
						<div className="flex flex-col gap-1">
							<Typography variant="body1" color="grey">
								Total Purchase
							</Typography>
							<Typography variant="body1">23</Typography>
						</div>
					</Box>
				</Grid>
				<Grid item xs={9}>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
						<Box sx={{ bgcolor: '#fff', borderRadius: 2, padding: 4 }}>
							<TruncableProducts title="Recent Purchase" products={products} />
						</Box>
						<Box sx={{ bgcolor: '#fff', borderRadius: 2, padding: 4 }}>
							<TruncableProducts title="Top Purchase" products={products} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Profile;
