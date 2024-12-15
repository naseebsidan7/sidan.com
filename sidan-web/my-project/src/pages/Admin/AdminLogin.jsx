 import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signInFailure, signInStart, signInSuccess } from '../../redux/state/adminSlice'
 
 const AdminLogin = () => {
       const [ formData, setFormData ] = useState({})
       const navigate = useNavigate()
       const dispatch = useDispatch()

       const { loading, error } = useSelector((state) => state.admin)

       const handleSubmit = async (e) => {
          e.preventDefault()
          try {
            dispatch(signInStart())
            const res = await fetch('/api/auth/signin',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
             
            const data = await res.json()

            if(data.success === false){
              dispatch(signInFailure(data.message))
              return
            }

            dispatch(signInSuccess(data))
            navigate('/admin-dashboard')

          } catch (error) {
            dispatch(signInFailure(error.message))
          }
       }

       const handleChange = (e) => {
             setFormData({...formData, [e.target.id]: e.target.value })
       }

       console.log(formData,'<== formData')

   return (
     <div className='p-3 max-w-lg mx-auto'>
        <h1 className='dark:text-white text-black text-4xl text-center font-semibold my-10  pb-10'> Admin Login </h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <input type="email" placeholder='email' id='email'            onChange={handleChange}   className=' border py-4 px-8 rounded-full mb-7' />
              <input type="password" placeholder='password' id='password'   onChange={handleChange}   className=' border py-4 px-8 rounded-full mb-7' />

              <button disabled={loading} className='bg-[#2e2e58] text-white py-4 px-8  rounded-full uppercase opacity-90 hover:opacity-100 disabled:opacity-80 '>
                    {loading? 'Loading..': 'Sign In'}
              </button>

              {error && <p className='text-red-500 mt-5'>{error}</p>}
 
        </form>
     </div>
   )
 }
 
 export default AdminLogin