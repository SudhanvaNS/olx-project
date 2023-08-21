import { useState } from 'react';

export default function Sell() {
  const [phoneNumber, setphoneNumber] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const data = {
      phoneNumber:phoneNumber,
      productDescription: productDescription,
      productPrice: productPrice,
      // selectedFile:selectedFile
     
    };

    try {
      const response = await fetch('http://127.0.0.1:4000/api/v1/product/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(data), // Convert data object to JSON string
        // 'Authorization': `Bearer ${token}`
      });

      if (response.ok) {
        // Request was successful
        const responseData = await response.json(); // Parse response JSON
        console.log('Response Data:', responseData);
        navigator('/getallone')
      } else {
        // Handle error case
        console.error('Request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    // You can handle the form submission logic here, like sending data to your backend
    // For demonstration purposes, we'll just log the form data
    console.log('Product Name:', phoneNumber);
    console.log('Product Description:', productDescription);
    console.log('Product Price:', productPrice);
    console.log('Selected File:', selectedFile);
  

  return (
    <div className="flex justify-center mt-10">
      <form className="max-w-md w-full" onSubmit={(e)=>{handleSubmit(e)}}>
        <h1 className="text-2xl font-semibold mb-4">Sell Your Product</h1>

        <label className="block mb-2" htmlFor="product-name">
          Product Name
        </label>
        <input
          type="text"
          id="product-name"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="product-description">
          Product Description
        </label>
        <textarea
          id="product-description"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="product-price">
          Product Price
        </label>
        <input
          type="number"
          id="product-price"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="product-image">
          Product Image
        </label>
        <input
          type="file"
          id="product-image"
          className="mb-4"
          onChange={handleFileChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Sell Product
        </button>
      </form>
    </div>
  );

  };