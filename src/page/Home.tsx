import Banner from '../components/UI/Banner';
import CategorySlides from '../components/UI/Sliders/CategorySlides';
import Products from '../components/shared/Products/Products';

const Home = () => {
	return (
		<div className="mx-5 lg:mx-10 xl:mx-20 mt-5">
			<Banner />
			<CategorySlides />
			<Products />
		</div>
	);
};

export default Home;
