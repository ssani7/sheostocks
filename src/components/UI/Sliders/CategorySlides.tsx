import ArrowLeft from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { IconButton, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import casual from '../../../assets/categories/casual.jpg';
import converse from '../../../assets/categories/converse.jpg';
import formal from '../../../assets/categories/formal_shoes.jpg';
import jogging from '../../../assets/categories/jogging.jpg';
import leather from '../../../assets/categories/leather.jpg';
import sports from '../../../assets/categories/sports.jpg';

const categories = [
	{
		image: casual,
		title: 'Casual',
	},
	{
		image: sports,
		title: 'Sports',
	},
	{
		image: jogging,
		title: 'Work Out',
	},
	{
		image: formal,
		title: 'Formal',
	},
	{
		image: converse,
		title: 'Converse',
	},
	{
		image: leather,
		title: 'Leather',
	},
];

const CategorySlides = () => {
	return (
		<div className="relative mt-5">
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right', disabledClass: 'swiper-button-disabled' }}
				modules={[Navigation]}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					900: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					540: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}>
				{categories.map((category) => (
					<SwiperSlide key={category.title}>
						<div className="w-full">
							<div>
								<img className="w-full rounded-lg h-60 max-h-60 min-[540px]:h-60 object-cover" src={category.image} alt="" />
							</div>
							<div className="flex items-center justify-between">
								<Typography marginTop={1} variant="body1" fontWeight={700}>
									{category.title}
								</Typography>
								<Typography marginTop={1} variant="body1" className="opacity-60" fontWeight={100}>
									(26 items)
								</Typography>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="absolute top-0 -left-4 bottom-0 z-10 flex items-center justify-center">
				<IconButton className="shadow-lg left-0 my-auto arrow-right group" sx={{ bgcolor: 'white', ':hover': { bgcolor: '#6466e9' } }}>
					<ArrowLeft className="group-hover:text-white" />
				</IconButton>
			</div>
			<div className="absolute top-0 -right-4 bottom-0 z-10 flex items-center justify-center">
				<IconButton className="shadow-lg left-0 my-auto arrow-left group" sx={{ bgcolor: 'white', rotate: '180deg', ':hover': { bgcolor: '#6466e9' } }}>
					<ArrowLeft className="group-hover:text-white" />
				</IconButton>
			</div>
		</div>
	);
};

export default CategorySlides;
