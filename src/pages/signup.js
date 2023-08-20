import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Sell() {
    return (
        <form className="max-w-xl mx-auto px-4 py-8 space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-xl font-semibold leading-7 text-gray-900">Product Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Provide details about your product.
                </p>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="col-span-full">
                        <label htmlFor="product-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="product-name"
                            name="product-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="product-description" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Description
                        </label>
                        <textarea
                            id="product-description"
                            name="product-description"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Write a few sentences about the product"
                        />
                    </div>
                    {/* Add more product information fields here */}
                </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-xl font-semibold leading-7 text-gray-900">Contact Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Provide a way for users to contact you.
                </p>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="col-span-full">
                        <label htmlFor="contact-email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="contact-email"
                            name="contact-email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="contact-first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="contact-first-name"
                            name="contact-first-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter first name"
                        />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="contact-last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="contact-last-name"
                            name="contact-last-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter last name"
                        />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="contact-phone" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="contact-phone"
                            name="contact-phone"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter phone number"
                        />
                    </div>
                    {/* Add more contact information fields here */}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
