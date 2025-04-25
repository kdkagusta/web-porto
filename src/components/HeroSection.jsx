const HeroSection = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <img
                        src="/your-image-path.png"
                        alt="Theme previews"
                        className="max-w-full rounded-xl shadow-lg"
                    />
                </div>

                {/* Left Side - Text Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Professional WordPress Themes & Website Templates for any project
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Discover thousands of easy to customize themes, templates & CMS products,
                        made by world-class developers.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 bg-white p-2 pr-0 rounded-xl shadow-md flex items-center max-w-xl">
                        <input
                            type="text"
                            placeholder="e.g. responsive WordPress"
                            className="flex-1 px-4 py-3 text-gray-700 rounded-xl focus:outline-none"
                        />
                        <button className="bg-green-600 text-white px-6 py-3 rounded-r-xl hover:bg-green-700 transition">
                            🔍 Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection