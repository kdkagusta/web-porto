import { useState, useRef, useEffect } from 'react';
import { ChevronDown, LogOut, User, Settings } from 'lucide-react';

const UserProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close the menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="5tcj
        '
        relative inline-block text-left" ref={menuRef}>
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full transition"
                >
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                    <div className="py-1">
                        <a href="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                            <User className="mr-2 w-4 h-4" />
                            Profile
                        </a>
                        <a href="/settings" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                            <Settings className="mr-2 w-4 h-4" />
                            Settings
                        </a>
                        <button
                            onClick={() => alert('Logging out...')}
                            className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                        >
                            <LogOut className="mr-2 w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfileMenu