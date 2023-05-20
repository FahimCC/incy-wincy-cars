import { Rating } from '@smastrom/react-rating';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToyTab = () => {
	return (
		<div className='container my-32'>
			<h1 className='clip text-center font-medium text-3xl lg:text-5xl mb-10'>
				Trending Toys
			</h1>
			<Tabs>
				<TabList>
					<Tab>Police Car</Tab>
					<Tab>Ambulance</Tab>
					<Tab>Jeep</Tab>
				</TabList>

				<TabPanel>
					<div className='flex flex-col lg:flex-row lg:gap-20 w-full lg:w-3/5 lg:mx-auto mt-8'>
						<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src='https://m.media-amazon.com/images/I/71+DXlMNnKS.jpg?fbclid=IwAR3mMywFAp42mLs9ieNoWqtPjTUP1bcSjvJwezPRuBsDXpI0tXtInPABFEQ'
								/>
							</div>
							<h2 className='text-2xl'>Yellow Monster Truck</h2>
							<p className='text-lg text-[#6930C3]'>$17.00</p>
							<button className='my-3 btn btn-outline btn-info'>
								View Details
							</button>
							<Rating style={{ maxWidth: 120 }} value={5} readOnly />
						</div>
						<div className='flex flex-col items-center justify-center bg-white  rounded-lg  border-4 hover:border-double   w-full py-5 mb-16'>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71b5MODxF7L._AC_SL1500_.jpg?fbclid=IwAR0CA0LVMky1YsANYCaSnivyFbyQaXq63iV_IfMCFZ9SNS1sw8a_S7XlITk'
								/>
							</div>
							<h2 className='text-2xl'>Orange Monster Truck</h2>
							<p className='text-lg text-[#6930C3]'>$20.00</p>
							<button className='my-3 btn btn-outline btn-info'>
								View Details
							</button>
							<Rating style={{ maxWidth: 120 }} value={5} readOnly />
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div className='flex flex-col lg:flex-row lg:gap-20 w-full lg:w-3/5 lg:mx-auto mt-8'>
						<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src='https://static-01.daraz.com.bd/p/bf3d2a2986c9935a30074010bd64b80a.jpg?fbclid=IwAR01wBbLkhhw4r0pyHOpqH7gL80JeVnz4hSgqjJNyKN-6dX_ESb2nUQUsx0'
								/>
							</div>
							<h2 className='text-2xl'>Ambulance</h2>
							<p className='text-lg text-[#6930C3]'>$10.00</p>
							<button className='my-3 btn btn-outline btn-info'>
								View Details
							</button>
							<Rating style={{ maxWidth: 120 }} value={4.5} readOnly />
						</div>
						<div className='flex flex-col items-center justify-center bg-white  rounded-lg  border-4 hover:border-double   w-full py-5 mb-16'>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src='https://images.othoba.com/images/thumbs/0507103_white-ambulance-vehicles-toys-diecast-car-model-with-lightsound-gift-for-kids.webp?fbclid=IwAR16a2aPAs67VJEyHWK5vK9lqpkjtXhMQHt0UsRKrLqso9YE7K3r3ck0isU'
								/>
							</div>
							<h2 className='text-2xl'>Ambulance</h2>
							<p className='text-lg text-[#6930C3]'>$12.00</p>
							<button className='my-3 btn btn-outline btn-info'>
								View Details
							</button>
							<Rating style={{ maxWidth: 120 }} value={4} readOnly />
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div className='flex flex-col lg:flex-row lg:gap-20 w-full lg:w-3/5 lg:mx-auto mt-8'>
						<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-4 hover:border-double w-full py-5 mb-16'>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src='https://www.littleriders.com.au/assets/full/JH-103.jpg?20230419134613'
								/>
							</div>
							<h2 className='text-2xl'>Army Jeep</h2>
							<p className='text-lg text-[#6930C3]'>$14.00</p>
							<button className='my-3 btn btn-outline btn-info'>
								View Details
							</button>
							<Rating style={{ maxWidth: 120 }} value={5} readOnly />
						</div>
						<div className='flex flex-col items-center justify-center bg-white  rounded-lg  border-4 hover:border-double   w-full py-5 mb-16'>
							<div className='w-full h-72'>
								<img
									className='w-full h-full object-fill p-5'
									src='https://ridefirstdrive.com/cdn/shop/products/d4b21e651f2e1eb76b4ba3d0ccac409b.jpg?v=1676225771&fbclid=IwAR3an4AMwHvBpVSRbbV7W1blAnWoo04SaIm5mgrwUwA7OD9wqXKilQfK0mw'
								/>
							</div>
							<h2 className='text-2xl'>Black Jeep</h2>
							<p className='text-lg text-[#6930C3]'>$15.00</p>
							<button className='my-3 btn btn-outline btn-info'>
								View Details
							</button>
							<Rating style={{ maxWidth: 120 }} value={4.5} readOnly />
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ToyTab;
