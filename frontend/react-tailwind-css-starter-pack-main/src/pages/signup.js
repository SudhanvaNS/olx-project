import React, { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
 
function Signup() {
  // const [email, setEmail] = useState(true);
  // const [password, setPassword] = useState(true);
  // const [confirmPassword, setConfirmPassword] = useState(true);
  // const [phoneNumber, setPhoneNumber] = useState(true);
  // const[lastName,setlastName]=useState(true);
  // const[firstname,setfirstname]=useState(true);

  const navigator=useNavigate();
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState(true);
  const[lastName,setlastName]=useState(true);
  const[firstname,setfirstname]=useState(true);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data={  firstName: firstname,
      lastName:lastName,
      email:email,
      password:password,
      confirmPassword:confirmPassword,
      contactNumber:phoneNumber}
      console.log(data);
    // Check if all fields are valid before proceeding
    if (firstname && lastName && email && password && confirmPassword && phoneNumber) {
      try {
        const response = await fetch('http://127.0.0.1:4000/api/v1/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Signup successful, handle redirection or other actions
          console.log('Signup successful');
          navigator('/login');
        } else {
          // Handle signup failure
          console.log('Signup failed');
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    } else {
      console.log('All fields must be valid to sign up');
    }
  };
  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src=""
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email" onChange={(e)=>setEmail(e.target.value)}
                name="email"
                type="email" 
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

            </div>
            <div className="mt-2">
              <input
                id="password" onChange={e=>setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              ConfirmPassword
            </label>
            <div className="mt-2">
              <input
                id="confirmPasswordl" onChange={(e)=>setConfirmPassword(e.target.value)}
                name="confirmPassword"
                type="confirmPassword" 
                autoComplete="confirmPassword"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              FirstName
            </label>
            <div className="mt-2">
              <input
                id="firstName" onChange={(e)=>setfirstname(e.target.value)}
                name="firstName"
                type="firstName" 
                autoComplete="firstName"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
              LastName
            </label>
            
            <div className="mt-2">
              <input
                id="lastname" onChange={(e)=>setlastName(e.target.value)}
                name="lastname"
                type="lastname" 
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="PhoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
              PhoneNumber
            </label>
            <div className="mt-2">
              <input
                id="PhoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)}
                name="PhoneNumber"
                type="PhoneNumber" 
                autoComplete="PhoneNumber"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit" onClick={onSubmit}
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        
      </div>
    </div>
  </>
  );
}
export default Signup;
