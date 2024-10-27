// src/AuthTabs.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambia a useNavigate

const AuthTabs = () => {
    const navigate = useNavigate(); // Inicializa el hook de navigate
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const showLogin = () => setActiveTab('login');
    const showRegister = () => setActiveTab('register');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth', { // Cambia esta URL por la de tu API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Enviar username y password
            });

            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }

            const data = await response.json();
            localStorage.setItem('sessionToken', data.token); // Suponiendo que recibes un token
            console.log('Login exitoso:', data);
            navigate('/shop'); // Redirige a la vista de Shop
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', { // Cambia esta URL por la de tu API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: name, password }), // Cambiar la estructura según la API
            });

            if (!response.ok) {
                throw new Error('Error en el registro');
            }

            const data = await response.json();
            localStorage.setItem('sessionToken', data.token); // Suponiendo que recibes un token
            console.log('Registro exitoso:', data);
            navigate('/shop'); // Redirige a la vista de Shop
        } catch (error) {
            console.error('Error al registrarse:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <div className="flex justify-center mb-6">
                <button
                    onClick={showLogin}
                    className={`px-4 py-2 font-semibold ${activeTab === 'login' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                >
                    Login
                </button>
                <button
                    onClick={showRegister}
                    className={`px-4 py-2 font-semibold ${activeTab === 'register' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                >
                    Registro
                </button>
            </div>

            {activeTab === 'login' && (
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Nombre de usuario"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Iniciar sesión
                    </button>
                </form>
            )}

            {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Nombre completo"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Nombre de usuario"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Registrarse
                    </button>
                </form>
            )}
        </div>
    );
};

export default AuthTabs;
