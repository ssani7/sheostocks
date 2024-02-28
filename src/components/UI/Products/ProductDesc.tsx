import { Box, Button, Divider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MotionBorder from '../../shared/MotionBorder';

const ProductDesc = () => {
	const [descActive, setDescActive] = useState<boolean>(true);
	const [x, setx] = useState<number>();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const dom = (e.target as HTMLElement)?.getBoundingClientRect();
		setx(dom.x);
	};
	return (
		<Box>
			<div>
				<div className="flex gap-5 relative pb-4">
					<Button
						onClick={(e) => {
							handleClick(e);
							setDescActive(true);
						}}
						variant={descActive ? 'outlined' : 'contained'}
						sx={{
							width: '7rem',
							textTransform: 'capitalize',
							bgcolor: '#e8e9f4',
							color: 'black',
							':hover': { bgcolor: '#8d97dc' },
						}}
						className="!shadow-lg">
						Description
					</Button>
					<Button
						onClick={(e) => {
							handleClick(e);
							setDescActive(false);
						}}
						variant={!descActive ? 'outlined' : 'contained'}
						sx={{
							width: '7rem',
							textTransform: 'capitalize',
							bgcolor: '#e8e9f4',
							color: 'black',
							':hover': { bgcolor: '#8d97dc' },
						}}
						className="!shadow-lg">
						Reviews
					</Button>
					<motion.div animate={{ x: x ? x - 24 : 0 }} className={`absolute bottom-0 w-28`}>
						<MotionBorder />
					</motion.div>
				</div>
				<Divider sx={{ marginY: '1rem' }} />
				<Box>
					<Typography variant="body1" color="#838a95">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio facere labore atque, nam architecto laboriosam velit molestiae aspernatur minus deleniti voluptatum harum vel fugiat ea
						ut nulla consequatur culpa alias animi iste nobis obcaecati pariatur doloribus. Harum ipsa aspernatur cum odit iusto, et distinctio maxime illo consequuntur laboriosam perferendis amet,
						suscipit laborum dicta nihil ullam deleniti explicabo praesentium tempore magni? Laboriosam, cum dolorem reprehenderit dicta odio velit nemo distinctio saepe officiis maxime quas eum
						aliquam voluptatem magni? Corporis, quasi amet.
					</Typography>
				</Box>
			</div>
		</Box>
	);
};

export default ProductDesc;
