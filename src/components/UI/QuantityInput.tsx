import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton } from '@mui/material';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { decreaseQuantity, increaseQuantity } from '../../redux/features/cart/cartSlice';
import { useAppDispatch } from '../../redux/hooks';

const QuantityInput = ({ initQuantity, product }: { initQuantity: number; product: any }) => {
	// const [quantity, setQuantity] = useState<number>(initQuantity || 0);
	const dispatch = useAppDispatch();
	return (
		<div className="flex items-center justify-center gap-4 bg-white w-fit mx-auto p-2 rounded-md">
			<IconButton onClick={() => dispatch(increaseQuantity(product._id))}>
				<AddCircleOutlineRoundedIcon />
			</IconButton>
			<div className="w-fit">{initQuantity}</div>
			<IconButton onClick={() => dispatch(decreaseQuantity(product._id))}>
				<RemoveCircleOutlineRoundedIcon />
			</IconButton>
		</div>
	);
};

export default QuantityInput;
