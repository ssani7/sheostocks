import { Input, Slider } from '@mui/material';
import React from 'react';

const PriceSlide = ({ value, setValue }: any) => {
	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value === '' ? 0 : Number(event.target.value));
	};

	const handleBlur = () => {
		if (value < 0) {
			setValue(0);
		} else if (value > 100) {
			setValue(100);
		}
	};

	return (
		<div className="mb-10 flex items-center gap-6">
			<Slider value={typeof value === 'number' ? value : 0} max={1000} onChange={handleSliderChange} aria-labelledby="input-slider" />
			<Input
				value={value}
				size="small"
				onChange={handleInputChange}
				onBlur={handleBlur}
				inputProps={{
					step: 10,
					min: 0,
					max: 1000,
					type: 'number',
					'aria-labelledby': 'input-slider',
				}}
			/>
		</div>
	);
};

export default PriceSlide;
