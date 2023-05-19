import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';

const MainLayout = () => {
	return (
		<div className='font-kanit'>
			<Header />
			<Outlet />
			<Footer />
			<Toaster />
		</div>
	);
};

export default MainLayout;
