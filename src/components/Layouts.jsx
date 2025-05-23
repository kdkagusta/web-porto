// Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Body */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
// flex-grow p-6 bg-gray-100