import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/title';

const AllToys = () => {
	useTitle('All Toys');
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);

	const loaderToys = useLoaderData();
	const [toys, setToys] = useState(loaderToys);

	const handleSearch = event => {
		event.preventDefault();
		const searchText = event.target.search.value;
		console.log(searchText);
		fetch(`https://incy-wincy-cars-server-fahimcc.vercel.app/${searchText}`)
			.then(res => res.json())
			.then(data => setToys(data));
	};

	return (
		<div className='container my-20'>
			<div className='flex justify-center '>
				<div className='from-control my-8' data-aos='fade-down'>
					<form onSubmit={handleSearch} className='input-group'>
						<input
							type='text'
							name='search'
							placeholder='Search Toy Name'
							className='input input-bordered input-info w-full min-w-full'
						/>
						<input
							type='submit'
							value='Search'
							className='squeeze bg-primary px-4 text-white'
						/>
					</form>
				</div>
			</div>
			<div className='overflow-x-auto' data-aos='fade-up'>
				<table className='table table-compact w-full text-center'>
					<thead>
						<tr>
							<th></th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Available Quantity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{toys.map((toy, index) => (
							<tr key={toy._id}>
								<th>{index + 1}</th>
								<td>{toy.sellerName}</td>
								<td>{toy.toyName}</td>
								<td>{toy.subCategory}</td>
								<td>${toy.price}</td>
								<td>{toy.availableQuantity}</td>
								<td>
									<Link
										to={`/view-toy/${toy._id}`}
										className='squeeze badge badge-info cursor-pointer'
									>
										View Details
									</Link>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<th></th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Available Quantity</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className='my-5 text-xl text-center'>
				<p>Total Show: {toys.length} toys</p>
			</div>
		</div>
	);
};

export default AllToys;
