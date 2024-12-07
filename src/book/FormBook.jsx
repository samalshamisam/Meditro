import React from 'react'
import './fbook.css';
function FormBook() {
  return (
    <div className='sa'>
      <h2 >Book Appointment</h2>
    <form action="">
    <div className="from-control">
    <select name="" id="">
        <option value="">Select Departmen</option>
        <option value=""> One</option>
        <option value="">Two</option>
        <option value="">Three</option>
      </select>
      
    </div>
    <div className="from-control">
    <select name="Select Doktor" id="">
        Select Doktor
        <option value=""> One</option>
        <option value="">Two</option>
        <option value="">Three</option>
      </select>
    </div>
    <div className="from-control">
    <input type="text" placeholder=' Your Name'  />
      <input type="number" placeholder=' Phone Numbers' />
    </div>
    <div className="from-control">
    <input type="number" placeholder=' Phone Numbers' />
      <div className="from-control">
      <label for="date-picker">
        <input type="date" />
      </label>
        
      
    </div>
    <button > Appointment Now</button>
    </div>
   </form>
   </div>
  )
}

export default FormBook