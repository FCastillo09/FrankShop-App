// src/Shop.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/productos/disponibles'); // Cambia esta URL por la de tu API
                const { productos } = response.data;

                // Filtra los datos que necesitas
                const filteredProducts = productos.map(product => ({
                    id: product._id.$oid, // Accede al ID
                    nombre: product.nombre,
                    precio: product.precio,
                    imagen: product.urlImagen,
                    descripcion: product.descripcion,
                }));

                setProducts(filteredProducts); // Guarda los productos en el estado
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Renderiza un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Cargando productos...</div>;
    }

    // Si hay un error, muestra el mensaje de error
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Renderiza las tarjetas de productos
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="border rounded-lg p-4">
                    {/* Placeholder de imagen */}
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="w-full h-full object-cover"
                            onLoad={(e) => e.target.classList.remove('opacity-0')}
                            style={{ opacity: 0 }} // Comienza invisible
                        />

                    </div>
                    <h2 className="p-2 text-lg font-bold">{product.nombre}</h2>
                    <p className="p-2 text-gray-600">${product.precio}</p>
                    <p>{product.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default Shop;
