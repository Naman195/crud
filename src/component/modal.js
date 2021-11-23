import { useState } from "react";

const Modal = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');
  const [country, setCountry] = useState('');




  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name, email, phone, about, country}
    // console.log(items);
    fetch('mockrestapi.herokuapp.com/api/employee', {
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(() =>{
      console.log('new Employee Added')
    })

  }

  return (
    <div className="create">
      <h2>Add a new Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>Employee Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Employee Email:</label>
        <input 
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Employee phone No.:</label>
        <input 
          type="phone" 
          required 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Employee Country:</label>
        <input 
          type="country" 
          required 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>About Employee:</label>
        <textarea
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        
        <button>Add Blog</button>
      </form>

    </div>
  )
}

export default Modal;