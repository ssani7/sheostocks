import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useGetBestSellingQuery } from '../../redux/api/salesAPI';

const COLORS = ['#eb7c85', '#7537bd', '#7131ac', '#d964df', '#a449d9'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
export default function PieChartContainer() {
	const { data: bs } = useGetBestSellingQuery('');
	const data = bs?.data || [];
	return (
		<ResponsiveContainer width={'100%'} height={500}>
			<PieChart>
				<Pie data={data} cx={'50%'} cy={'50%'} labelLine={false} label={renderCustomizedLabel} outerRadius={120} fill="#8884d8" dataKey="value">
					{data.map((_entry: any, index: number) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</ResponsiveContainer>
	);
}
