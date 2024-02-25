import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CardActionArea, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type ProductProps = {
	product: any;
};

export default function ProductCard({ product }: ProductProps) {
	return (
		<Card className="group" sx={{ height: '100%', bgcolor: 'transparent', boxShadow: 'none', borderRadius: '0.5rem' }}>
			<CardActionArea>
				<CardMedia className="rounded-lg group-hover:rounded-b-none" sx={{ width: '100%' }} component="img" width="30rem" image={product.image} alt="green iguana" />
				<CardContent sx={{ bgcolor: 'transparent' }}>
					<div className="flex justify-between items-center">
						<div>
							<Typography gutterBottom variant="body1" component="div">
								{product.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								500
							</Typography>
						</div>
						<IconButton>
							<ShoppingCartOutlinedIcon />
						</IconButton>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
