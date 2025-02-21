import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function test(){
  const [name,setName]=useState();
  const [drop,setDropVal]=useState();
  const [incval,setIncVAl]=useState(0);
  const [decval,setDecVal]=useState(0);
  const [nname, ssetName] = useState("");
  // my code
  const [enterName,showName]=useState();
  const [enterEmail,showEmail]=useState();
  const [enterPassword,showPassword]=useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${nname}`)
  }

  const showContent =(term)=>{
term.preventDefault();
console.log(`Your name is: ${enterName}, your email is: ${enterEmail},your password is: ${enterPassword}`)
  }

  return(
    <>
    <h1>Printing Name</h1>
    <input className='p-2 m-2 border border-white rounded-2xl' type="text"
    placeholder='plaese enter your name'
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    <h2>your name is: {name}</h2>
    <h1>This is dropdown</h1>
    <select class=" m-5 bg-black  text-white-500 border border-white rounded-xl shadow-lg shadow-cyan-500/50 " name="" id="" value={drop}
    onChange={(e)=>setDropVal(e.target.value)}>
      <option  value="1">one</option>
      <option  value="2">two</option>
      <option value="3">three</option>
      <option  value="4">four</option>
    </select>
    <h2>you select: {drop}</h2>
    <h1>increment</h1>
    <button class="m-5" onClick={()=>setIncVAl(incval+1)}>Click to increase: {incval}</button>
    <h1 >Decreament</h1>
    <button class=" m-5 bg-pink-500 text-blue-500" onClick={()=>setDecVal(decval-1)} >click to decrease: {decval}</button>

    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={nname}
          onChange={(e) => ssetName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    
    //my code

<form onSubmit={showContent}>
  <label htmlFor="">Enter Name:
    <input type="text" value={enterName}
    onChange={(e)=>showName(e.target.value)} />
  </label>
  <label htmlFor="">Enter Email:
    <input type="email" 
    value={enterEmail}
    onChange={(e)=>showEmail(e.target.value)} />
  </label>
  <label htmlFor="">Enter Password:
    <input type="password"
    value={enterPassword}
    onChange={(e)=>showPassword(e.target.value)} />
  </label>
  <input type="submit" />
</form>


    </>
  )
}
export default test



// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }
// export default MyForm