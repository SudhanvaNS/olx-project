import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Getall1() {
    const [product, setProduct] = useState([{

        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',

    }]);
    useEffect(() => {
        fetchProducts();
    }, []);
    //check the url once here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getAllProduct');
            const fetchedProducts = response.data; // Assuming the response is an array of products
            setProduct(fetchedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    return (
        <div className="bg-white">
            <nav className="bg-gray-100 text-white p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="https://images.collegedunia.com/public/college_data/images/logos/1485945274c3.jpg" alt="Your Logo" className="h-8 w-auto" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-2 rounded-lg border-2 border-gray-600 focus:border-gray-400"
                    />
                </div>
                <Link to="/sell"><div href="#" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Sell</div></Link>
            </nav>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {product.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}