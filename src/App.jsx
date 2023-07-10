import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabase'

function App() {

  const [mode, setMode] = useState(null)
  const [quantity, setQuantity]= useState(null)
  const[price, setPrice] = useState(null)
  const[name, setName] = useState(null)

  const upload = async (e) =>{
    if(mode== null || quantity== null || price==null || name==null)
    {
        alert("Empty fields detected :(")
        return
    }
    console.log(name)
    console.log(quantity)
    console.log(price)
    console.log(mode)

   const {data, error} = await supabase.from("sales").insert([{name:name,quantity:quantity,price:price,mode:mode}])
    if(error){
        console.log("Error detected : ")   
    }
    else{
      console.log("Success")
      window.location.reload(false);
    } 
}

  return (
    <div className="container">
                <label className="heading">Item Name</label>
                <br></br>
                <select className='dropdown' defaultValue="" onChange={(e)=>setName(e.target.value)}>
                  <option> </option>
                  <option> Lemon Sprite </option>
                  <option> Ribena Sprite </option>
                  <option> Milky Mango Sago </option>
                  <option> Butter Popcorn </option>
                  <option> Caramel Popcorn</option>
                  <option> Button Badge</option>
                </select>
                <br></br>
                <label className="heading">Quantity</label>
                <br></br>
                <input className="form-title " type="text" onChange={e => setQuantity(parseInt(e.target.value))} placeholder=""/>
                <br></br>
                <label className="heading">Price</label>
                <br></br>
                <input className="form-title " type="text" onChange={e => setPrice(parseInt(e.target.value))} placeholder=""/>
                <br></br>
                <label className="heading">Mode</label>
                <br></br>
                <select className='dropdown' defaultValue="" onChange={(event)=>setMode(event.target.value)}>
                  <option> </option>
                  <option> Cash </option>
                  <option> QR </option>
                </select>
                 <br></br>
                 <br></br>
                 <br></br>

                <button  onClick={e => upload(e)}> Submit </button>
    </div>
  )
}

export default App
