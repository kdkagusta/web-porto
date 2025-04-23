const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 text-center p-4 text-sm text-gray-500">
            © {new Date().getFullYear()} MySite. All rights reserved.
        </footer>
    );
}

export default Footer