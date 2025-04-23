import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-bold text-blue-600">MySite</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/about" className="hover:text-blue-500">About</Link>
                    <Link to="/services" className="hover:text-blue-500">Services</Link>
                    <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700">
                    <Link to="/" className="block hover:text-blue-500">Home</Link>
                    <Link to="/about" className="block hover:text-blue-500">About</Link>
                    <Link to="/services" className="block hover:text-blue-500">Services</Link>
                    <Link to="/contact" className="block hover:text-blue-500">Contact</Link>
                </div>
            )}
        </header>
    );
}

export default Header;