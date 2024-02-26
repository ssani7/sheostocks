import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Products from '@mui/icons-material/Inventory2Outlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SalesIcon from '@mui/icons-material/ShoppingCartOutlined';

export const menuOptions = [{ text: 'Dashboard', link: '/inventory', icon: <DashboardOutlinedIcon /> }];
export const productOptions = [
	{ text: 'All Products', link: '/inventory/products', icon: <Products /> },
	{ text: 'Add Products', link: '/inventory/addProduct', icon: <AddBoxOutlinedIcon /> },
];
export const saleOptions = [
	{ text: 'Sales', link: '/inventory/sales', icon: <SalesIcon /> },
	{ text: 'Make a Sale', link: '/inventory/sale', icon: <SellOutlinedIcon /> },
];
