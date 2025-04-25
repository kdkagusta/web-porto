import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import UserProfileMenu from "./UserProfile";
import menuLinks from "../api/menu.json";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl font-bold text-blue-600 uppercase">Wi Apps</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-sm text-gray-700 items-center uppercase">
                    {menuLinks.map((link) => (
                        <a href={link.url} key={link.id} className="no-underline text-gray-700 hover:text-blue-600 font-semibold">{link.title}</a>
                    ))}
                    <UserProfileMenu />
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700 uppercase">
                    <Link to="/templates" className="no-underline hover:text-blue-500">Web Templates</Link>
                    <Link to="/apps" className="hover:text-blue-500">Apps</Link>
                    <Link to="/repositories" className="hover:text-blue-500">Repositories</Link>
                    <Link to="/blogs" className="hover:text-blue-500">Blogs</Link>
                    <Link to="/about" className="hover:text-blue-500">About</Link>
                    <UserProfileMenu />
                </div>
            )}
        </header>
    );
}

export default Header;