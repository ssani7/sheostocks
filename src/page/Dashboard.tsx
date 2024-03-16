import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CardSection from '../components/UI/Dashboard/CardSection';
import PieChartContainer from '../components/UI/PieChart';
import RecentSalesTable from '../components/UI/RecentSalesTable';
import StockTable from '../components/UI/StockTable';

const data = [
	{
		name: 'Saturday',
		sales: 4000,
		purchase: 2400,
		amt: 2400,
	},
	{
		name: 'Sunday',
		sales: 3000,
		purchase: 1398,
		amt: 2210,
	},
	{
		name: 'Monday',
		sales: 2000,
		purchase: 9800,
		amt: 2290,
	},
	{
		name: 'Tuesday',
		sales: 2780,
		purchase: 3908,
		amt: 2000,
	},
	{
		name: 'Wednesday',
		sales: 1890,
		purchase: 4800,
		amt: 2181,
	},
	{
		name: 'Thursday',
		sales: 2390,
		purchase: 3800,
		amt: 2500,
	},
	{
		name: 'Friday',
		sales: 3490,
		purchase: 4300,
		amt: 2100,
	},
];

const Dashboard = () => {
	return (
		<div className="w-full">
			<CardSection />
			<div className="flex flex-col lg:flex-row gap-5 w-full mt-6">
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
