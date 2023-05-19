import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MyToys = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);
	return (
		<div className='container my-20'>
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
						<tr>
							<th>1</th>
							<td>
								<div className='avatar'>
									<div className='mask mask-squircle w-12 h-12'>
										<img
											src='/tailwind-css-component-profile-2@56w.png'
											alt='Avatar Tailwind CSS Component'
										/>
									</div>
								</div>
							</td>
							<td>Quality Control Specialist</td>
							<td>Littel, Schaden and Vandervort</td>
							<td>Canada</td>
							<td>12/16/2020</td>
							<td>Blue</td>
							<td>Blue</td>
							<td>Blue</td>
							<td>Blue</td>
							<td className='space-x-2'>
								<div className='squeeze badge badge-warning cursor-pointer'>
									Update
								</div>
								<div className='squeeze badge badge-error cursor-pointer'>
									Delete
								</div>
							</td>
						</tr>
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
		</div>
	);
};

export default MyToys;
