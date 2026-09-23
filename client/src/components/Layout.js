import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <h1>Todo App</h1>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
