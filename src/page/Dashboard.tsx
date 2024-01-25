import PurchaseIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StockIcon from '@mui/icons-material/Inventory2Outlined';
import ProfitIcon from '@mui/icons-material/MonetizationOnOutlined';
import SalesIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import InfoCard from '../components/UI/InfoCard';
import PieChartContainer from '../components/UI/PieChart';
import RecentSalesTable from '../components/UI/RecentSalesTable';
import StockTable from '../components/UI/StockTable';

const data = [
	{
		name: 'Page A',
		sales: 4000,
		purchase: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		sales: 3000,
		purchase: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		sales: 2000,
		purchase: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		sales: 2780,
		purchase: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		sales: 1890,
		purchase: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		sales: 2390,
		purchase: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		sales: 3490,
		purchase: 4300,
		amt: 2100,
	},
];

const Dashboard = () => {
	return (
		<div>
			<div className="grid grid-cols-2 gap-6 xl:grid-cols-4 pt-2">
				<InfoCard icon={<SalesIcon htmlColor="#6466e9" className="!text-5xl" />} title="Sales" value={3230} />
				<InfoCard icon={<PurchaseIcon htmlColor="#6466e9" className="!text-5xl" />} title="Purchase" value={2450} />
				<InfoCard icon={<ProfitIcon htmlColor="#6466e9" className="!text-5xl" />} title="Profit this month" value={430} />
				<InfoCard icon={<StockIcon htmlColor="#6466e9" className="!text-5xl" />} title="Current Stock" value={2310} />
			</div>

			<div className="flex flex-col xl:flex-row gap-5 w-full mt-6">
				<div className="w-full xl:w-[40%] bg-white p-7 rounded-lg shadow-sm">
					<p className="text-xl font-semibold">Top Selling Products</p>
					<PieChartContainer />
				</div>
				<div className="w-full xl:w-[60%] p-7 flex flex-col justify-between bg-white rounded-lg shadow-sm">
					<p className="pb-10 text-xl font-semibold">This Weeks Sales & Purchases</p>

					<ResponsiveContainer width={'100%'} height={450}>
						<BarChart data={data}>
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="sales" fill="#4e46dc" />
							<Bar dataKey="purchase" fill="#bbbced" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="bg-white p-7 mt-6 rounded-lg shadow-sm">
				<p className="mb-4 text-xl font-semibold">Stock Alert</p>
				<StockTable />
			</div>
			<div className="bg-white p-7 mt-6 rounded-lg shadow-sm">
				<p className="mb-4 text-xl font-semibold">Recent Sales</p>
				<RecentSalesTable />
			</div>
		</div>
	);
};

export default Dashboard;
