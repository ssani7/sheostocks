import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import AddProduct from '../page/AddProduct';
import Dashboard from '../page/Dashboard';
import DuplicatePage from '../page/DuplicatePage';
import Home from '../page/Home';
import Login from '../page/Login';
import ProductDetails from '../page/ProductDetails';
import Products from '../page/Products';
import Inventory from '../page/ProductsAdmin';
import Register from '../page/Register';
import Sales from '../page/Sales';
import SellProduct from '../page/SellProduct';
import UpdateProduct from '../page/UpdateProduct';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/products/:productId',
				element: <ProductDetails />,
			},
		],
	},
	{
		path: '/inventory',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'products',
				element: <Inventory />,
			},
			{
				path: 'addProduct',
				element: <AddProduct />,
			},
			{
				path: 'sale',
				element: <SellProduct />,
			},
			{
				path: 'products/update/:id',
				element: <UpdateProduct />,
			},
			{
				path: 'products/duplicate/:id',
				element: <DuplicatePage />,
			},
			{
				path: 'sales',
				element: <Sales />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
]);

export default router;
