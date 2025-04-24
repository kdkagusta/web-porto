import React from "react";
import Layout from "../components/Layouts";
import Sliders from "../components/Sliders";
import slider from "../api/slider.json";
import blogPosts from "../api/blog-list.json";
import Card from "../components/Card";

const Home = () => {
	return (
		<Layout>
			<div className="max-w-4xl mx-auto">
				<Sliders data={slider} />
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="container">
								<div className="row align-items-start">
									<h1 className="fs-3 font-bold mb-8">Latest Posts</h1>
									{blogPosts.map((post) => (
										<div
											key={post.id}
											className="col-md-3"
										>
											<h2 className="text-xl font-semibold mb-2">{post.title}</h2>
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
						<div className="col-lg-2">
							<div className="container">
								<div className="row align-items-start">
									<h1 className="fs-3 font-bold mb-8">Popular Posts</h1>
									{blogPosts.slice(0, 3).map((post) => (
										<div
											key={post.id}
											className="col-xl"
										>
											<p className="text-sm font-bold mb-2">{post.title}</p>
											<p className="text-[10px] text-gray-500 mb-2">{post.date}</p>
											<p className="text-xs text-gray-700 mb-4">{post.summary}</p>
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
			</div>
		</Layout>
	);
};

export default Home;
