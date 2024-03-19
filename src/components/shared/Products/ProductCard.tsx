import { CardActionArea, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type ProductProps = {
	product: any;
};

export default function ProductCard({ product }: ProductProps) {
	const dispatch = useAppDispatch();
	const { email } = useAppSelector((state) => state.user);
	const navigate = useNavigate();

	return (
		<Card className="group" sx={{ height: '100%', bgcolor: 'transparent', boxShadow: 'none', borderRadius: '0.5rem' }}>
			<CardActionArea>
				<Link to={`/products/${product._id}`}>
					<CardMedia className="rounded-lg group-hover:rounded-b-none" sx={{ width: '100%' }} component="img" image={product.image} alt="green iguana" />
				</Link>
			</CardActionArea>
			<CardContent sx={{ bgcolor: 'transparent' }}>
				<div className="flex justify-between items-center">
					<div>
						<Link to={`/products/${product._id}`}>
							<Typography className="hover:text-purple-400 transition-colors duration-300" gutterBottom variant="body1" fontWeight={700}>
								{product.name}
							</Typography>
						</Link>
						<Typography variant="body2" color="text.secondary">
							${product.price}
						</Typography>
					</div>
					<IconButton
						onClick={(e) => {
							e.stopPropagation();
							if (!email) navigate('/login');
							else dispatch(addToCart(product));
						}}>
						<AddShoppingCartIcon />
					</IconButton>
				</div>
			</CardContent>
		</Card>
	);
}
