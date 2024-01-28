import ProductsTable from '../components/UI/ProductsTable';
import { useGetProductsQuery } from '../redux/features/products/productsAPI';

const Products = () => {
	const { data } = useGetProductsQuery('');
	console.log('🚀 ~ products ~ data:', data);
	// const products: IProduct[] = [];
	return (
		<div className="w-full">
			<ProductsTable />
		</div>
	);
};

export default Products;
