import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {


const navigate = useNavigate();
  
const {register, handleSubmit, formState: { errors }} = useForm();
const {
  user,
  login,
  logout
} = useContext(AuthContext);

const handleLogin = (data) => {
  console.log(data)
  if(!errors.email){
    login(data);
    navigate('/')
  }
}

  return (
   <form onSubmit={handleSubmit(handleLogin)}  className='bg-black flex flex-col gap-y-2 p-5 mt-10 rounded-md h-50 ' action="" >
    <input {...register('email', {
      minLength: {
        value: 5,
        message: 'email is too short'
      }
    })} className='border-2 border-white rounded-md m-2 block p-2 m-5' type="email"  placeholder='enter your email'/>
    <input className='bg-gray-400 p-2 hover:bg-cyan-300 rounded-md self-center ' type="submit" value="login" />
    {
      errors.email && <b className='font-bold text-red-500'>{errors.email.message}</b>
    }
   </form>
  )
}

export default Login