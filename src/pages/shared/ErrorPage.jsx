import Lottie from 'lottie-react';
import { Link, useRouteError } from 'react-router-dom';
import err from '../../assets/error.json';

const ErrorPage = () => {
	const { error } = useRouteError();

	return (
		<>
			<div className='w-full h-full flex justify-center items-center'>
				<Lottie className='max-w-3xl' animationData={err} loop={true} />
			</div>
			<p className='text-xl md:text-2xl font-semibold text-center -mt-32 md:-mt-72'>
				{error?.message}
			</p>
			<div className='text-center my-10'>
				<button className='bttn squeeze text-white'>
					<Link to='/'>Back to Homepage</Link>
				</button>
			</div>
		</>
	);
};

export default ErrorPage;
