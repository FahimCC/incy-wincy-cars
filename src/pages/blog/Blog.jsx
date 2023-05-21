/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import useTitle from '../../hooks/title';

const Blog = () => {
	useTitle('Blog');

	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);
	return (
		<div data-aos='fade-up' className='container'>
			<div className='my-14 border-4 hover:border-double border-secondary rounded-lg p-4 md:px-20 md:py-10 bg-gray-50'>
				<h1 className='clip text-center font-medium text-3xl lg:text-5xl  mb-10'>
					Blog
				</h1>
				<div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							1. What is an access token and refresh token? How do they work and
							where should we store them on the client-side?
						</h3>
						<div className='text-base md:text-lg font-normal '>
							<strong className='active'>Answer:</strong>
							<p>
								Access tokens are used in token-based authentication to allow an
								application to access an API. A refresh token is a credential
								artifact that lets a client application get new access tokens
								without having to ask the user to log in again.
							</p>
							<p>
								A refresh token just helps you re-validate a user without them
								having to re-enter their login credentials multiple times. The
								access token is re-issued, provided the refresh token is a valid
								one requesting permission to access confidential resources.
							</p>
							<p>We can store both tokens securely in HttpOnly cookies.</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							2. Compare SQL and NoSQL databases?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								SQL databases are vertically scalable, while NoSQL databases are
								horizontally scalable.
							</p>
							<p>
								SQL databases are table-based, while NoSQL databases are
								document, key-value, graph, or wide-column stores.
							</p>
							<p>
								SQL databases are better for multi-row transactions, while NoSQL
								is better for unstructured data like documents or JSON.
							</p>
							<p>
								SQL databases are fixed or predefined schema, while NoSQL is
								dynamic schema.
							</p>
							<p>
								SQL databases is can be used for complex queries, while NoSQL is
								not good for complex queries.
							</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							3. What is express js? What is Nest JS ?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								Express js is a free and open-source web application framework
								for Node.js. It is used for designing and building web
								applications quickly and easily.
							</p>
							<p>
								Nest js is a framework for building efficient, scalable Node.js
								server-side applications. It uses modern JavaScript, is built
								with TypeScript (preserves compatibility with pure JavaScript)
								and combines elements of OOP (Object Oriented Programming), FP
								(Functional Programming), and FRP (Functional Reactive
								Programming).
							</p>
							<p>
								If you're building a large-scale enterprise application with
								complex business logic, NestJS may be the better choice. If
								you're building a small to medium-sized web application or API,
								or you require a lot of customization and low-level control,
								Express may be the better choice.
							</p>
						</div>
					</div>

					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							4. What is MongoDB aggregate and how does it work?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								MongoDB's aggregation framework is a powerful tool for
								processing and analyzing data. It works by applying a series of
								stages to transform and manipulate documents in a collection.
							</p>
							<p>
								The stages make up what is known as a pipeline. The stages in a
								pipeline can filter, sort, group, reshape and modify documents
								that pass through the pipeline.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
