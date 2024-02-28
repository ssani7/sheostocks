import { motion } from 'framer-motion';

const MotionBorder = () => {
	return (
		<motion.div
			className="w-full h-1 bg-[#6466e9]"
			initial={{
				x: '-100%',
			}}
			animate={{
				x: 0,
			}}
			transition={{
				ease: 'easeInOut',
				duration: 0.4,
			}}
		/>
	);
};

export default MotionBorder;
