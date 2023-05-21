import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	// console.log(id);

	const [toy, setToy] = useState([]);
	// `https://incy-wincy-cars-server-fahimcc.vercel.app/update_toy/${id}`

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(`http://localhost:5000/update_toy/${id}`);
			const data = await res.json();
			console.log(data);
			setToy(data);
		};
		loadData();
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		fetch(`http://localhost:5000/update_toy/${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'Done',
						text: 'Toy data successfully updated',
					});
					navigate('/my-toys');
				}
				console.log(data);
			});
	};
	console.log(errors);

	return (
		<div className='max-w-2xl mx-auto my-20'>
			<h1 className='clip text-center font-medium text-2xl lg:text-4xl  mb-10'>
				Add Toy
			</h1>
			<div className='border-4 hover:border-double border-secondary py-10 px-10 rounded-lg'>
				<form
					className='flex flex-col space-y-3 items-center justify-center max-w-full p-5'
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						type='text'
						className='hidden px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						defaultValue={toy?._id}
						placeholder='Id'
						{...register('id', {})}
					/>
					<input
						type='text'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						defaultValue={toy?.price}
						placeholder='price'
						{...register('price', { required: true })}
					/>
					<input
						type='text'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						defaultValue={toy?.availableQuantity}
						placeholder='Available Quantity'
						{...register('availableQuantity', { required: true })}
					/>
					<textarea
						rows='3'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						placeholder='Details Description'
						defaultValue={toy?.detailsDescription}
						{...register('detailsDescription', { required: true })}
					/>

					<input className='bttn squeeze' type='submit' />
				</form>
			</div>
		</div>
	);
};

export default UpdateToy;
