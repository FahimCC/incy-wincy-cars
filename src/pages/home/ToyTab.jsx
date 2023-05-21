import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTab = () => {
	const [subCategory, setSubCategory] = useState('monster-truck');
	const [toy, setToy] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(
				`https://incy-wincy-cars-server-fahimcc.vercel.app/${subCategory}`
			);
			const data = await res.json();
			// console.log(data);
			setToy(data);
		};
		loadData();
	}, [subCategory]);

	return (
		<div className='container my-32'>
			<h1 className='clip text-center font-medium text-3xl lg:text-5xl mb-10'>
				Trending Toys
			</h1>
			<Tabs className='w-full'>
				<TabList>
					<Tab>
						<span onClick={() => setSubCategory('monster-truck')}>
							Monster Truck
						</span>
					</Tab>
					<Tab>
						<span onClick={() => setSubCategory('ambulance')}>Ambulance</span>
					</Tab>
					<Tab>
						<span onClick={() => setSubCategory('jeep')}>Jeep</span>
					</Tab>
				</TabList>

				<TabPanel>
					<div className='flex flex-col lg:flex-row lg:gap-20 w-full lg:w-3/5 lg:mx-auto mt-8'>
						<div
							data-aos='fade-left'
							className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'
						>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src={toy[0]?.photoURL}
								/>
							</div>
							<h2 className='text-2xl'>{toy[0]?.toyName}</h2>
							<p className='text-lg text-[#6930C3]'>${toy[0]?.price}</p>
							<button className='my-3 btn btn-outline btn-info'>
								<Link to={`/view-toy/${toy[0]?._id}`}>View Details</Link>
							</button>
							<Rating
								style={{ maxWidth: 120 }}
								value={toy[0]?.ratings}
								readOnly
							/>
						</div>
						<div
							data-aos='fade-right'
							className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'
						>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src={toy[1]?.photoURL}
								/>
							</div>
							<h2 className='text-2xl'>{toy[1]?.toyName}</h2>
							<p className='text-lg text-[#6930C3]'>${toy[1]?.price}</p>
							<button className='my-3 btn btn-outline btn-info'>
								<Link to={`/view-toy/${toy[1]?._id}`}>View Details</Link>
							</button>
							<Rating
								style={{ maxWidth: 120 }}
								value={toy[1]?.ratings}
								readOnly
							/>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div className='flex flex-col lg:flex-row lg:gap-20 w-full lg:w-3/5 lg:mx-auto mt-8'>
						<div
							data-aos='fade-up'
							className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'
						>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src={toy[0]?.photoURL}
								/>
							</div>
							<h2 className='text-2xl'>{toy[0]?.toyName}</h2>
							<p className='text-lg text-[#6930C3]'>${toy[0]?.price}</p>
							<button className='my-3 btn btn-outline btn-info'>
								<Link to={`/view-toy/${toy[0]?._id}`}>View Details</Link>
							</button>
							<Rating
								style={{ maxWidth: 120 }}
								value={toy[0]?.ratings}
								readOnly
							/>
						</div>
						<div
							data-aos='fade-down'
							className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'
						>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src={toy[1]?.photoURL}
								/>
							</div>
							<h2 className='text-2xl'>{toy[1]?.toyName}</h2>
							<p className='text-lg text-[#6930C3]'>${toy[1]?.price}</p>
							<button className='my-3 btn btn-outline btn-info'>
								<Link to={`/view-toy/${toy[1]?._id}`}>View Details</Link>
							</button>
							<Rating
								style={{ maxWidth: 120 }}
								value={toy[1]?.ratings}
								readOnly
							/>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div className='flex flex-col lg:flex-row lg:gap-20 w-full lg:w-3/5 lg:mx-auto mt-8'>
						<div
							data-aos='fade-right'
							className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'
						>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src={toy[0]?.photoURL}
								/>
							</div>
							<h2 className='text-2xl'>{toy[0]?.toyName}</h2>
							<p className='text-lg text-[#6930C3]'>${toy[0]?.price}</p>
							<button className='my-3 btn btn-outline btn-info'>
								<Link to={`/view-toy/${toy[0]?._id}`}>View Details</Link>
							</button>
							<Rating
								style={{ maxWidth: 120 }}
								value={toy[0]?.ratings}
								readOnly
							/>
						</div>
						<div
							data-aos='fade-left'
							className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'
						>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src={toy[1]?.photoURL}
								/>
							</div>
							<h2 className='text-2xl'>{toy[1]?.toyName}</h2>
							<p className='text-lg text-[#6930C3]'>${toy[1]?.price}</p>
							<button className='my-3 btn btn-outline btn-info'>
								<Link to={`/view-toy/${toy[1]?._id}`}>View Details</Link>
							</button>
							<Rating
								style={{ maxWidth: 120 }}
								value={toy[1]?.ratings}
								readOnly
							/>
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ToyTab;
