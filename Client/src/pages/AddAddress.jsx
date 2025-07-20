import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { motion } from 'framer-motion';
//Input Field Component

const InputField=({type,placeholder,name,handleChange, address})=>(
    <input type={type}
    placeholder={placeholder}
     onChange={handleChange}
     name={name}
    value={address[name]}
    required
    className="w-full border border-gray-300 px-4 py-2 rounded outline-none"/>


) 
 const AddAddress =()=>{

const [address, setAdress] =useState({
   firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
})

const handleChange=(e)=>{
const {name, value} =e.target

setAdress((prevAddress)=>(
  {
...prevAddress,
[name]: value,
  }
))

}

 const onSubmitHandler= async(e)=>{
e.preventDefault();
  alert('Address Saved Successfully!');
 }
  return (
     <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0, y: 50 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 25 },
        },
        exit: { opacity: 0, y: -30 },
      }}
    >
    <div className='mt-16 pb-16'>
        <p className='text-2xl font-semibold mb-6'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
<div className='flex-1 max-w-md'>
<form className='space-y-3 mt-6 text-sm' onSubmit={onSubmitHandler}>
    <div className='grid grid-cols-2 gap-4'>
      <InputField handleChange={handleChange} address={address} name='firstName' type='text' placeholder="First Name"/>
       <InputField handleChange={handleChange} address={address} name='lastName' type='text' placeholder="Last Name"/>
       
    </div>
      <InputField handleChange={handleChange} address={address} name='email' type='email' placeholder="Email Address"/>
        <InputField handleChange={handleChange} address={address} name='street' type='text' placeholder="Street"/>
        <div className='grid grid-cols-2 gap-4'>
           <InputField handleChange={handleChange} address={address} name='city' type='text' placeholder="City"/>
            <InputField handleChange={handleChange} address={address} name='state' type='text' placeholder="State"/>
       
       
        </div>
         <div className='grid grid-cols-2 gap-4'>
           <InputField handleChange={handleChange} address={address} name='zipcode' type='number' placeholder="Zip Code"/>
            <InputField handleChange={handleChange} address={address} name='country' type='text' placeholder="Country"/>
       
       
        </div>
         <InputField handleChange={handleChange} address={address} name='phone' type='text' placeholder="Phone Number"/>

         <button className='w-full bg-primary text-white py-3 rounded hover:bg-primary-dull transition cursor-pointer'>
          Save Address
         </button>
       
       
</form>
</div>
<img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge}alt="Add Address" />
      </div>
    </div>
    </motion.div>
  )
 }

export default AddAddress;
