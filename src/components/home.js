// src/Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Bienvenido a la Página de Inicio</h1>
            <p>Aquí puedes explorar las características de la tienda.</p>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                {/* Contenedor principal */}
                <div className="text-center p-4 max-w-2xl">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenido a Shop</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Descubre nuestra variedad de productos de alta calidad a precios inigualables.
                        Desde electrónica hasta moda, tenemos todo lo que necesitas. ¡Explora y compra hoy!
                    </p>
                    <img
                        src="https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/b7f32082-3539-4c9b-fc40-168308e1c200/public" // Cambia esta URL por una imagen de tu elección
                        alt="Productos en tienda"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800">¡Ofertas Exclusivas!</h2>
                        <p className="text-gray-600">Aprovecha nuestras promociones y descuentos por tiempo limitado.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
