import { createBrowserRouter } from 'react-router-dom';
import { default as DashboardPages } from '../App';
import MainLayout from '../layouts/MainLayout';
import AddProduct from '../page/AddProduct';
import Dashboard from '../page/Dashboard';
import DuplicatePage from '../page/DuplicatePage';
import Home from '../page/Home';
import Login from '../page/Login';
import Products from '../page/Products';
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
		],
	},
	{
		path: '/dashboard',
		element: <DashboardPages />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'products/add',
				element: <AddProduct />,
			},
			{
				path: 'products/sell',
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
