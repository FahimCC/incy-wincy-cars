/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);

	const { user } = useContext(AuthContext);
	const [toys, setToys] = useState([]);
	// `https://incy-wincy-cars-server-fahimcc.vercel.app/my_toys/${user.email}`

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(`http://localhost:5000/my_toys/${user.email}`);
			const data = await res.json();
			// console.log(data);
			setToys(data);
		};
		loadData();
	}, [user]);

	const handleDelete = id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			cancelButtonText: 'No, cancel!',
			confirmButtonText: 'Yes, delete it!',
			reverseButtons: true,
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/my_toys/${id}`, {
					method: 'DELETE',
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						const remaining = toys.filter(toy => toy._id !== id);
						setToys(remaining);
					});
				Swal.fire('Deleted!', 'Your toy data has been deleted.', 'success');
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				Swal.fire('Cancelled', 'Your toy data is safe 😊', 'error');
			}
		});
	};

	return (
		<div className='container my-20 h-screen'>
			<div className='overflow-x-auto' data-aos='fade-up'>
				<table className='table table-compact w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Toy</th>
							<th>Toy Name</th>
							<th>Seller Name</th>
							<th>Seller Email</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Ratings</th>
							<th>Available Quantity</th>
							<th>Details Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{toys.map((toy, i) => (
							<tr key={toy._id}>
								<th>{i + 1}</th>
								<td>
									<div className='avatar'>
										<div className='mask mask-squircle w-12 h-12'>
											<img
												src={toy.photoURL}
												alt='Avatar Tailwind CSS Component'
											/>
										</div>
									</div>
								</td>
								<td>{toy.toyName}</td>
								<td>{toy.sellerName}</td>
								<td>{toy.sellerEmail}</td>
								<td>{toy.subCategory}</td>
								<td>{toy.price}</td>
								<td>{toy.ratings}</td>
								<td>{toy.availableQuantity}</td>
								<td className='max-w-xs overflow-x-scroll'>
									{toy.detailsDescription}
								</td>
								<td className='space-x-2'>
									<Link
										to={`/update-toy/${toy._id}`}
										className='squeeze badge badge-warning cursor-pointer'
									>
										Update
									</Link>
									<div
										onClick={() => handleDelete(toy._id)}
										className='squeeze badge badge-error cursor-pointer'
									>
										Delete
									</div>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<th></th>
							<th>Toy</th>
							<th>Toy Name</th>
							<th>Seller Name</th>
							<th>Seller Email</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Ratings</th>
							<th>Available Quantity</th>
							<th>Details Description</th>
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

export default MyToys;
