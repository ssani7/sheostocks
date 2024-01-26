import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddProduct from '../page/AddProduct';
import Dashboard from '../page/Dashboard';
import Login from '../page/Login';
import Products from '../page/Products';
import Sales from '../page/Sales';
import SellProduct from '../page/SellProduct';

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
				path: 'sales',
				element: <Sales />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
