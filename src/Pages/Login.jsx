import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-[80vh] pt-[100px]'>
      <div className='w-[480px] md:w-[580px] h-[600px] md:h-[600px] bg-primary m-auto px-[60px] py-10'>
        <h1 className='my-5 font-semibold text-xl'>Sign Up</h1>

        {/* Login and sign up fields */}
        <div className='flex flex-col gap-7 mt-8'>
          <input type="text" placeholder='Your Name' 
          className='h-12 md:h-16 pl-4 border border-solid border-textColor outline-none text-xl
          rounded-xl focus:shadow-hoverColor focus:shadow-md duration-200'/>

          <input type="email" placeholder='Your Email Adress'
          className='h-12 md:h-16 pl-4 border border-solid border-textColor outline-none text-xl
          rounded-xl focus:shadow-hoverColor focus:shadow-md duration-200' />

          <input type="password" placeholder='Password' 
          className='h-12 md:h-16 pl-4 border border-solid border-textColor outline-none text-xl
          rounded-xl focus:shadow-hoverColor focus:shadow-md duration-200' />
        </div>
        <button className='w-[360px] md:w-[460px] h-12 md:h-18 bg-hoverColor mt-4
        text-textColor rounded-xl border-none text-xl font-semibold cursor-pointer 
        hover:shadow-md hover:shadow-textColor active:text-primary'>Continue</button>
        {/* Login section */}
        <p className='mt-2 text-md font-semibold'>Already have an account? 
        <span className='text-red-600 ml-2 font-semibold cursor-pointer'>Login Here</span></p>
        {/* Aggrement with terms */}
        <div className='flex items-center mt-4 gap-2 font-semibold'>
        <input type="checkbox" name='' id='' />
        <p className='' 
        >By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  )
}

export default Login