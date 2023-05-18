/* eslint-disable react/no-unescaped-entities */

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';
import login from '../../assets/login.png';

const Login = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);
	return (
		<div className='hero my-24'>
			<div className='hero-content flex-col lg:flex-row-reverse gap-20'>
				<figure data-aos='fade-left' className='max-w-2xl'>
					<img src={login} alt='' />
				</figure>
				<div
					data-aos='fade-right'
					className='card flex-shrink-0 w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-5'
				>
					<h1 className='text-3xl text-center font-medium'>Login</h1>
					<form className='card-body -my-4'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								placeholder='email'
								name='email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='text'
								placeholder='password'
								name='password'
								className='input input-bordered'
								required
							/>
							<label className='label'>
								<a href='#' className='label-text-alt link link-hover'>
									Forgot password?
								</a>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button type='submit' className='bttn squeeze text-white'>
								Login
							</button>
						</div>
					</form>
					<div className='divider px-8'>OR</div>
					<Link className='border-2 mt-2 mx-8 h-10 flex justify-center items-center px-3 py-1 rounded-lg squeeze'>
						<img className='w-11 h-8' src={google} alt='' />
						<span className='-ml-1'>Continue with Google</span>
					</Link>
					<p className='text-center my-4'>
						Don't have an account?
						<Link to='/register' className='text-primary hover:underline pl-2'>
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
