import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AllToys = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);
	return (
		<div className='container my-20'>
			<div className='flex justify-center '>
				<form className='from-control my-8' data-aos='fade-down'>
					<div className='input-group'>
						<input
							type='text'
							placeholder='Search Toy Name'
							className='input input-bordered input-info w-full min-w-full'
						/>
						<button className='squeeze bg-primary px-4'>Search</button>
					</div>
				</form>
			</div>
			<div className='overflow-x-auto' data-aos='fade-up'>
				<table className='table table-compact w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Available Quantity</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Littel, Schaden and Vandervort</td>
							<td>Canada</td>
							<td>12/16/2020</td>
							<td>
								<div className='squeeze badge badge-info cursor-pointer'>
									View Details
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th></th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Sub-category</th>
							<th>Price</th>
							<th>Available Quantity</th>
							<th>Details</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

export default AllToys;
