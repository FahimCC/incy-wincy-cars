import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.png';

const Register = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);
	return (
		<div className='hero my-24'>
			<div className='hero-content flex-col lg:flex-row gap-20'>
				<figure data-aos='fade-right' className='max-w-2xl'>
					<img src={register} alt='' />
				</figure>
				<div
					data-aos='fade-left'
					className='card flex-shrink-0 w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-5'
				>
					<h1 className='text-3xl text-center font-medium'>Sign Up</h1>
					<form className='card-body -my-4'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								placeholder='name'
								name='name'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
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
								type='password'
								placeholder='password'
								name='password'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Photo URL</span>
							</label>
							<input
								type='text'
								placeholder='password'
								name='photoUrl'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control mt-6'>
							<button type='submit' className='bttn squeeze text-white'>
								Register
							</button>
						</div>
					</form>
					<p className='text-center my-4'>
						Already have an account?
						<Link to='/login' className='text-primary hover:underline pl-2'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
