import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import car from '../../assets/car.svg';

const Footer = () => {
	return (
		<div className='shadow-inner'>
			<div className='container grid  md:grid-cols-2 lg:grid-cols-3 gap-14 py-14 '>
				<div className=''>
					<Link to='/' className='flex items-center gap-2'>
						<div className='flex flex-col items-center'>
							<img className='w-24' src={car} alt='' />
							<span className='-mt-4 text-md font-medium'>Incy Wincy Cars</span>
						</div>
					</Link>
					<p className='max-w-xs text-black my-5'>
						You can know or not know how a car runs and still enjoy riding in a
						car.
					</p>
					<div className='flex gap-3 text-3xl text-primary'>
						<Link>
							<BsFacebook className='squeeze' />
						</Link>
						<Link>
							<BsTwitter className='squeeze' />
						</Link>
						<Link>
							<BsInstagram className='squeeze' />
						</Link>
						<Link>
							<BsLinkedin className='squeeze' />
						</Link>
					</div>
				</div>
				<div className='mt-2'>
					<h3 className='text-4xl text-primary'>Get in Touch</h3>
					<div className='text-lg text-black mt-5'>
						<p className='flex items-center my-3 gap-2 '>
							<HiPhone className='text-primary' />
							+880 1533-333333
						</p>
						<p className='flex items-center my-3 gap-2'>
							<FaEnvelope className='text-primary' />
							info@gmail.com
						</p>
						<p className='flex items-center my-3 gap-2'>
							<HiLocationMarker className='text-primary' />
							458, Madrasah Road, Dhaka
						</p>
					</div>
				</div>
				<div className='mt-2 md:col-span-2 lg:col-span-1 w-full'>
					<h3 className='text-4xl text-primary'>Address</h3>
					<MapContainer
						className='max-w-sm md:w-full h-48 mt-2'
						center={[23.70518362341626, 90.42864393320859]}
						zoom={13}
						scrollWheelZoom={false}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={[23.70518362341626, 90.42864393320859]}>
							<Popup>Incy Wincy Cars</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<div className='bg-primary text-white text-xs md:text-base py-2 text-center'>
				<p>
					Copyright © Incy Wincy Cars! All Rights Reserved. Developed by Fahim
					Faysal 2023.
				</p>
			</div>
		</div>
	);
};

export default Footer;
