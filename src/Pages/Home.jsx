import React from "react";
import Layout from "../components/Layouts";
import Sliders from "../components/Sliders";
import blogPosts from "../api/blog-list.json";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import repositoriesList from '../api/repositories.json'

const Home = () => {
	return (
		<Layout>
			<Sliders />
			<HeroSection />
			<section className="bg-red-100 w-full mx-auto p-8">
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
					Check out our newest themes and templates
				</h2>
				<p style={{paddingBottom: '30px'}}  className="text-gray-600 max-w-3xl mx-auto mb-10 text-center">
					We carefully review new entries from our community one by one to make sure they meet high-quality design and functionality standards. From multipurpose themes to niche templates, you’ll always find something that catches your eye.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 t-100">
					<div className="p-2 rounded-lg">
						<Card
							title="Card 1"
							description="This is the description for Card 1."
							image="https://via.placeholder.com/150"
							link="#"
						/>
					</div>
					<div className="p-2 rounded-lg">
						<Card
							title="Card 1"
							description="This is the description for Card 1."
							image="https://via.placeholder.com/150"
							link="#"
						/>
					</div>
					<div className="p-2 rounded-lg">
						<Card
							title="Card 1"
							description="This is the description for Card 1."
							image="https://via.placeholder.com/150"
							link="#"
						/>
					</div>
					<div className="p-2 rounded-lg">
						<Card
							title="Card 1"
							description="This is the description for Card 1."
							image="https://via.placeholder.com/150"
							link="#"
						/>
					</div>
					<div className="p-2 rounded-lg">
						<Card
							title="Card 1"
							description="This is the description for Card 1."
							image="https://via.placeholder.com/150"
							link="#"
						/>
					</div>
					<div className="p-2 rounded-lg">
						<Card
							title="Card 1"
							description="This is the description for Card 1."
							image="https://via.placeholder.com/150"
							link="#"
						/>
					</div>
				</div>
			</section>
			<section className="w-full max-w-9/10 mx-auto p-8">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="container">
								<div className="row align-items-start">
									<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
										Check out our newest themes and templates
									</h2>
									<p style={{paddingBottom: '30px'}} className="text-gray-600 max-w-3xl mx-auto mb-10 text-center">
										We carefully review new entries from our community one by one to make sure they meet high-quality design and functionality standards. From multipurpose themes to niche templates, you’ll always find something that catches your eye.
									</p>
									{blogPosts.map((post) => (
										<div
											key={post.id}
											className="col-md-3"
										>
											<p className="text-xl font-bold mb-2">{post.title}</p>
											<p className="text-sm text-gray-500 mb-2">{post.date}</p>
											<p className="text-gray-700 mb-4">{post.summary}</p>
											<a
												href={post.link}
												className="text-blue-600 hover:underline text-sm font-medium"
											>
												Read more →
											</a>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="text-center px-4 py-12 bg-gray-100">
				<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
					Check out our newest themes and templates
				</h2>
				<p style={{paddingBottom: '30px'}}  className="text-gray-600 max-w-3xl mx-auto mb-10">
					We carefully review new entries from our community one by one to make sure they meet high-quality design and functionality standards. From multipurpose themes to niche templates, you’ll always find something that catches your eye.
				</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center max-w-5xl mx-auto">
					{repositoriesList.map((repo, idx) => (
						<a
							key={idx}
							className="btn btn-primary border-gray-200 hover:border-gray-400 text-gray-700 transition"
							href={repo.link}
						>
							{repo.title}
						</a>
					))}
				</div>
			</section>
		</Layout>
	);
};

export default Home;
