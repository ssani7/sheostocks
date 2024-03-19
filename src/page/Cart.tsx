import { Box, Container, Divider, IconButton, TableContainer, TextField } from '@mui/material';
import PageTitle from '../components/shared/PageTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import QuantityInput from '../components/UI/QuantityInput';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { removeFromCart } from '../redux/features/cart/cartSlice';

const Cart = () => {
	const [discountCode, setDiscountCode] = useState<string>('');
	const validCode = discountCode === 'React.js';

	const { products } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const subTotal = products?.reduce((total, product) => {
		return total + product.price * product.quantity;
	}, 0);

	return (
		<Container maxWidth="xl">
			<PageTitle title="Cart" />

			<Box sx={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
				{!products?.length ? (
					<Container sx={{ height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Typography sx={{ fontSize: 14 }} gutterBottom>
							No Products added to cart yet
						</Typography>
					</Container>
				) : (
					<TableContainer sx={{ maxHeight: 440 }}>
						<Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Product</TableCell>
									<TableCell align="right">Price</TableCell>
									<TableCell align="center">Quantity</TableCell>
									<TableCell align="right">Total Price</TableCell>
									<TableCell align="right"></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{products.map((product) => (
									<TableRow key={product.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell
											sx={{
												display: 'flex',
												flexDirection: {
													xs: 'column',
													lg: 'row',
												},
												alignItems: {
													xs: 'start',
													lg: 'center',
												},
												gap: '1rem',
											}}
											component="th"
											scope="row">
											<img className="w-32 max-h-36" src={product.image} alt="" />
											{product.name}
										</TableCell>
										<TableCell align="right">{product.price}</TableCell>
										<TableCell align="right">
											<QuantityInput product={product} initQuantity={product.quantity} />
										</TableCell>
										<TableCell align="right">{(product.price * product.quantity).toFixed(2)}</TableCell>
										<TableCell align="right">
											<IconButton onClick={() => dispatch(removeFromCart(product._id))}>
												<CloseIcon color="error" />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
								<TableRow>
									<TableCell colSpan={2} />
									<TableCell colSpan={1} align="center">
										Subtotal
									</TableCell>
									<TableCell align="right">{subTotal.toFixed(2)}</TableCell>
									<TableCell colSpan={1} />
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				)}

				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography sx={{ fontSize: 16 }} align="center" gutterBottom>
							Have a Coupon Code?
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
							<TextField sx={{ marginTop: '1rem' }} defaultValue={'React.js'} id="coupon-code" label="Coupon" variant="outlined" />
							<button className="primary-btn !py-3" onClick={() => setDiscountCode((document.getElementById('coupon-code') as HTMLInputElement).value)}>
								Apply
							</button>
						</Box>
					</CardContent>
					<Divider />
					<div className="flex flex-col gap-3 p-5">
						<div className="flex items-center justify-between">
							<Typography sx={{ fontSize: 14 }} gutterBottom>
								Current Total :
							</Typography>
							<Typography sx={{ fontSize: 14 }} gutterBottom>
								{subTotal}
							</Typography>
						</div>
						<div className="flex items-center justify-between">
							<Typography sx={{ fontSize: 14 }} gutterBottom>
								Discount :
							</Typography>
							<Typography sx={{ fontSize: 14 }} gutterBottom>
								{validCode ? 25 : 0}%
							</Typography>
						</div>
						<div className="flex items-center justify-between">
							<Typography sx={{ fontSize: 14 }} gutterBottom>
								Grand Total :
							</Typography>
							<Typography sx={{ fontSize: 14 }} gutterBottom>
								{(subTotal - (subTotal * (validCode ? 25 : 0)) / 100).toFixed(2)}
							</Typography>
						</div>
						<button className="primary-btn !py-3">Proceed To Checkout</button>
					</div>
				</Card>
			</Box>
		</Container>
	);
};

export default Cart;
