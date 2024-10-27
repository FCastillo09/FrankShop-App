import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('sessionToken');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('sessionToken');
        setIsAuthenticated(false);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-lg font-bold">
                    Shop
                </div>

                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-blue-200">
                        Home
                    </Link>
                    {isAuthenticated && (
                        <Link to="/shop" className="text-white hover:text-blue-200">
                            Shop
                        </Link>
                    )}

                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="text-white hover:text-blue-200">
                            Cerrar sesión
                        </button>
                    ) : (
                        <Link to="/auth" className="text-white hover:text-blue-200">
                            Iniciar sesión / Registrarse
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
