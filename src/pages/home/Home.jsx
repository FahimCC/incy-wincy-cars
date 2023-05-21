import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Banner from './Banner';
import CustomerReview from './CustomerReview';
import NewArrivals from './NewArrivals';
import PhotoGallery from './PhotoGallery';
import ToyTab from './ToyTab';
import useTitle from '../../hooks/title';

const Home = () => {
	useTitle('Home')

	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);
	return (
		<div>
			<Banner />
			<ToyTab />
			<PhotoGallery />
			<NewArrivals />
			<CustomerReview />
		</div>
	);
};
export default Home;
