import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SaleCategory } from '../../../types/sales';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = ['daily', 'weekly', 'monthly', 'yearly'];

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
// 	return {
// 		fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
// 	};
// }

export default function SalesCategory({ category, setCategory }: { category: SaleCategory; setCategory: (_v: SaleCategory) => void }) {
	// const theme = useTheme();

	const handleChange = (event: SelectChangeEvent<typeof category>) => {
		const {
			target: { value },
		} = event;
		setCategory(value as SaleCategory);
	};

	return (
		<div className="pb-5">
			<FormControl sx={{ m: 1, width: 300, mt: 3 }}>
				<p className="text-sm mb-2">Currently Showing</p>

				<Select
					displayEmpty
					value={category}
					onChange={handleChange}
					input={
						<OutlinedInput
							sx={{
								'&  .MuiOutlinedInput-notchedOutline': { borderColor: '#bbbced !important' },
							}}
							className="capitalize"
						/>
					}
					renderValue={(selected) => {
						if (selected.length === 0) {
							return <em>Daily</em>;
						}

						return selected;
					}}
					MenuProps={MenuProps}
					inputProps={{ 'aria-label': 'Without label' }}>
					{names.map((name) => (
						<MenuItem className="capitalize" key={name} value={name}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
