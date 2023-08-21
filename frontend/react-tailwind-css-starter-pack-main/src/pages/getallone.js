import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Getall1() {
    const [product, setProduct] = useState([{

        id: 1,
        name: 'Calculator',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61yotlsfV3L._AC_UF1000,1000_QL80_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 35,
        color: 'Black'},
        {
            id: 1,
            name: "dbms book",
            price: 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            imageSrc: "https://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325981133.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            id: 2,
            name: "Scientific Calculator ",
            price: 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            imageSrc: "https://thumbs.dreamstime.com/b/scientific-calculator-11115888.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            id: 3,
            name: "Mens Cotton Jacket",
            price: 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            imageSrc: "https://m.media-amazon.com/images/I/71DOjmsFq+L._AC_UF1000,1000_QL80_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            id: 4,
            name: "Mens Casual Slim Fit",
            price: 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            imageSrc: "data:image/jpeg;base64,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",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        
]);
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