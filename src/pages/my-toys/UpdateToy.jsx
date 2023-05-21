import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/title';

const UpdateToy = () => {
	useTitle('Update Toy');

	const navigate = useNavigate();
	const { id } = useParams();
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

	const handleUpdate = event => {
		event.preventDefault();
		const form = event.target;
		const price = form.price.value;
		const availableQuantity = form.availableQuantity.value;
		const detailsDescription = form.detailsDescription.value;

		const data = { price, availableQuantity, detailsDescription };

		fetch(`http://localhost:5000/update_toy/${id}`, {
			method: 'PATCH',
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

	return (
		<div className='max-w-2xl mx-auto my-20'>
			<h1 className='clip text-center font-medium text-2xl lg:text-4xl  mb-10'>
				Add Toy
			</h1>
			<div className='border-4 hover:border-double border-secondary py-10 px-10 rounded-lg'>
				<form
					className='flex flex-col space-y-3 items-center justify-center max-w-full p-5'
					onSubmit={handleUpdate}
				>
					<input
						type='text'
						className='hidden px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						defaultValue={toy?._id}
						name='id'
						placeholder='Id'
					/>
					<input
						type='text'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						defaultValue={toy?.price}
						name='price'
						placeholder='price'
					/>
					<input
						type='text'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						defaultValue={toy?.availableQuantity}
						name='availableQuantity'
						placeholder='Available Quantity'
					/>
					<textarea
						rows='3'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						placeholder='Details Description'
						name='detailsDescription'
						defaultValue={toy?.detailsDescription}
					/>

					<input className='bttn squeeze' type='submit' />
				</form>
			</div>
		</div>
	);
};

export default UpdateToy;
