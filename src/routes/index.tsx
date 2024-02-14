import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddProduct from '../page/AddProduct';
import Dashboard from '../page/Dashboard';
import DuplicatePage from '../page/DuplicatePage';
import Login from '../page/Login';
import Products from '../page/Products';
import Register from '../page/Register';
import Sales from '../page/Sales';
import SellProduct from '../page/SellProduct';
import UpdateProduct from '../page/UpdateProduct';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
