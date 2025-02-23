import React, { useState } from 'react'

const Loginform = () => {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [Email,setEmail]=useState();
    const [Password,setPassword]=useState();

  return (
   <>
   <hr />
   <h1>Create an account</h1>
   <p>Already have an account?<a class="text-blue-400 underline" href="#">Log in</a></p>

<form class="m-5 bg-[rgb(44,38,56)]" action="">
   <input class=" w-50 m-2 p-2 bg-[#3c364c] rounded-lg"
    value={firstName} type="text" placeholder='First name'
    onChange={(e)=>setFirstName(e.target.value)} />
    
    <input  class="p-2 w-50 bg-[#3c364c] rounded-lg "
    value={lastName} type="text" placeholder='Last name' 
    onChange={(e)=>setLastName(e.target.value)} />
        <br />
    <input class="w-100 p-2 m-3 bg-[#3c364c] rounded-lg "
     type="email" placeholder='Email' />
        <br />
    <input class=" p-2 m-3 w-100 bg-[#3c364c] rounded-lg "
     type="password" placeholder='Enter your password' />
        <br />
        <div class="flex justify-start ml-10">
<input type="checkbox" class="mr-2"/> I agreed to 
    <a class="text-blue-400 underline ml-2 " href="#">Term &amp; Conditions
    </a>
        </div>
        <br />
      
    <button class="!bg-[#6d54b5] m-5">Create account</button>
    <p>Or register with</p>
    <button class="w-50 m-5 outline-1 !bg-transparent">Google</button>
    <button class="w-50 m-5 outline-1 !bg-transparent">Apple</button>
    </form>
   </>
  )
}

export default Loginform
