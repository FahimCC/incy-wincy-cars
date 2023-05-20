import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const AddAToys = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		fetch(`https://incy-wincy-cars-server.vercel.app/add_toy`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						icon: 'success',
						title: 'Done',
						text: 'Toy successfully stored into the database',
					});
					navigate('/view-toy');
				}
			});
	};
	console.log(errors);

	return (
		<div className='container my-20 '>
			<div className='border-4 hover:border-double border-secondary p-5 md:p-10 rounded-lg'>
				<h1 className='clip text-center font-medium text-3xl lg:text-5xl  mb-10'>
					Add Toy
				</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							value={user.displayName}
							className='insert'
							{...register('sellerName', { required: true })}
						/>
						<input
							type='email'
							value={user.email}
							className='insert'
							{...register('sellerEmail', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Toy photo URL'
							className='insert'
							{...register('photoURL', { required: true })}
						/>
						<input
							type='text'
							placeholder='Toy Name'
							className='insert'
							{...register('toyName', { required: true })}
						/>
					</div>

					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Sub-category'
							className='insert'
							{...register('subCategory', { required: true })}
						/>
						<input
							type='text'
							placeholder='price'
							className='insert'
							{...register('price', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Ratings'
							className='insert'
							{...register('ratings', { required: true })}
						/>
						<input
							type='text'
							placeholder='Available Quantity'
							className='insert'
							{...register('availableQuantity', { required: true })}
						/>
					</div>
					<textarea
						placeholder='Details Description'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						{...register('detailsDescription', { required: true })}
					/>

					<input
						className='bttn squeeze btn-block text-lg'
						value='Add Toy'
						type='submit'
					/>
				</form>
			</div>
		</div>
	);
};

export default AddAToys;
