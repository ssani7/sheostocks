import { OutlinedInput } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const productData = [
	{ title: 'Product Name' },
	{ title: 'Brand' },
	{ title: 'Category' },
	{ title: 'Price' },
	{ title: 'Quantity' },
	{ title: 'Alert Quantity' },
	{ title: 'Size' },
	{ title: 'Color' },
];

const ProductForm = () => {
	const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

	const onDrop = useCallback((acceptedFiles: Array<File>) => {
		const reader = new FileReader();

		reader.onabort = () => console.log('file reading was aborted');
		reader.onerror = () => console.log('file reading has failed');
		reader.onload = () => {
			const binaryStr = reader.result;
			setPreview(binaryStr);
		};
		reader.readAsDataURL(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div>
			<div className="flex flex-col xl:flex-row gap-6">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 xl:w-[75%]">
					{productData.map((p) => (
						<div>
							<p className="mb-2 text-sm">{p.title}</p>
							<OutlinedInput
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
					))}
				</div>
				<div className="xl:w-[20%]">
					<div {...getRootProps()}>
						<input accept="image/png" {...getInputProps()} />
						{isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
					</div>

					{preview && (
						<p className="mt-6 h-fit w-80 mx-auto p-2 rounded-lg bg-white">
							<img className="w-full h-full object-contain my-auto" src={preview as string} alt="Upload preview" />
						</p>
					)}
				</div>
			</div>
			<div className="mt-6">
				<p className="mb-2 text-sm">Description</p>
				<OutlinedInput
					multiline
					rows={6}
					sx={{
						'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
					}}
					className="w-full bg-white border-0"
				/>
			</div>
		</div>
	);
};

export default ProductForm;
