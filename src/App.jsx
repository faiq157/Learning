import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function test(){
  const [name,setName]=useState();
  const [drop,setDropVal]=useState();
  const [incval,setIncVAl]=useState(0);
  const [decval,setDecVal]=useState(0);
  return(
    <>
    <h1>Printing Name</h1>
    <input className='p-2 m-2 border border-white rounded-2xl' type="text"
    placeholder='plaese enter your name'
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    <h2>your name is: {name}</h2>
    <h1>This is dropdown</h1>
    <select name="" id="" value={drop}
    onChange={(e)=>setDropVal(e.target.value)}>
      <option value="1">one</option>
      <option value="2">two</option>
      <option value="3">three</option>
      <option value="4">four</option>
    </select>
    <h2>you select: {drop}</h2>
    <h1>increment</h1>
    <button onClick={()=>setIncVAl(incval+1)}>Click to increase: {incval}</button>
    <h1>Decreament</h1>
    <button onClick={()=>setDecVal(decval-1)}>click to decrease: {decval}</button>
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