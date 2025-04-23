import React from "react";
import Layout from "../components/Layouts";
import SliderCard from "../components/SliderCard";
import slider from "../api/slider.json";
import blogPosts from "../api/blog-list.json";

const Home = () => {
	return (
		<Layout>
			<div className="max-w-4xl mx-auto">

				<SliderCard data={slider}/>

				<h1 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h1>

				<div className="space-y-6">
					{blogPosts.map((post) => (
						<div
							key={post.id}
							className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition"
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
		</Layout>
	);
};

export default Home;
