import React from "react";
import {
    FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaPinterestP
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white text-sm pt-12 px-6">
            {/* Top grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-700">
                <div>
                    <h3 className="font-semibold mb-3 text-gray-400">Wi Apps</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Terms</a></li>
                        <li><a href="#" className="hover:underline">Licenses</a></li>
                        <li><a href="#" className="hover:underline">Become an affiliate</a></li>
                        <li><a href="#" className="hover:underline">Cookies</a></li>
                        <li><a href="#" className="hover:underline">Cookie Settings</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-gray-400">Help</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Mail</a></li>
                        <li><a href="#" className="hover:underline">Whatsapp</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-gray-400">Community</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Github</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 text-gray-400">Meet Us</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About WiApps</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Do not sell or share my personal info</a></li>
                        <li><a href="#" className="hover:underline">Sitemap</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 text-right justify-between">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Envato_logo.svg" alt="Envato Market" className="h-6 mb-4 ml-auto" />
                        <p className="text-lg font-semibold text-green-400">77,184,878</p>
                        <p className="text-zinc-400">items sold</p>
                        <p className="text-lg font-semibold text-green-400 mt-2">$1,210,151,463</p>
                        <p className="text-zinc-400">community earnings</p>
                    </div>
                    <div>
                        <p className="text-zinc-400 text-sm">Certified B<br />Corporation</p>
                    </div>
                </div>
            </div>

            {/* Bottom links */}
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-6 text-zinc-400 text-xs">
                <div className="space-x-4">
                    <span className="font-semibold text-white">Envato Elements</span>
                    <span>Placeit by Envato</span>
                    <span>Envato Tuts+</span>
                    <span>All Products</span>
                    <span>Sitemap</span>
                </div>
                <div className="flex space-x-4 mt-4 lg:mt-0 text-white text-lg">
                    <FaTwitter className="hover:text-gray-400" />
                    <FaFacebookF className="hover:text-gray-400" />
                    <FaYoutube className="hover:text-gray-400" />
                    <FaInstagram className="hover:text-gray-400" />
                    <FaPinterestP className="hover:text-gray-400" />
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto text-zinc-500 text-xs pb-10">
                <p>Price is in US dollars and excludes tax and handling fees</p>
                <p className="mt-2">© 2025 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
            </div>
        </footer>
    );
};

export default Footer;