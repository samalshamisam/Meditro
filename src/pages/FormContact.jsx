import React, { useState } from 'react';
import './contact.css';
function FormContact () {
    const [name  ,  setname] = useState("");
    const Changename = (event)=>{
        setname(event.target.value)
    }
    const FormHandler = (event) =>{
        event.preventDefault();
        if(name.length == ""){
            alert("not empty");
            return;
        }
        console.log(name);
    }



  return (
    <>
      <form action="">
                <div className="from-control">
                  <input type="text" placeholder=' Your Name' onChange={Changename} />
                </div>
                <div className="from-control">
                  <input type="email" placeholder='Email' />
                </div>
                <div className="from-control">
                  <input type="number" placeholder=' Phone Numbers' />
                </div>
                <div className="from-control">
                  <select name="" id="">
                    <option value="">Select Departmen</option>
                    <option value=""> One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                  </select>
                  <div className="from-control">
                  <textarea name="" id="" placeholder='Your Message'></textarea>
                </div>
                <button > submit</button>
                </div>
               </form>
    </>
  )
}

export default FormContact