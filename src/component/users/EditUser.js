import axios from 'axios';
import { useHistory } from "react-router";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router';

const EditUser = () => {
    let history = useHistory();
    let { id } = useParams();
    
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        about: "",
        age: "",
        dob: "",
        address: ""

    })

    const {name, phone, email, country, about, age, dob, address} = user;

    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value})
        
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://mockrestapi.herokuapp.com/api/employee/${id}`, user);
        history.push("/");

    }
    const loadUser = async () => {

      const result = await axios.get(`http://mockrestapi.herokuapp.com/api/employee/${id}`);
      setUser(result.data.data);

  }
    
    useEffect(() => {
        loadUser()
    },[ ]) // eslint-disable-line react-hooks/exhaustive-deps

    

    return(
        <div className="create">
      <h2>Update the Employee</h2>

      <form onSubmit={(e)=> onSubmit(e)}>
        <label>Employee Name:</label>
        <input 
          type="text" 
          required 
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />

        <label>Employee Email:</label>
        <input 
          type="email" 
          required 
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <label>Employee phone No.:</label>
        <input 
          type="phone" 
          required 
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
        <label>Employee Country:</label>
        <input 
          type="country" 
          required 
          name="country"
          value={country}
          onChange={(e) => onInputChange(e)}
        />
        <label>Employee Age:</label>
        <input 
          type="num" 
          required 
          name="age"
          value={age}
          onChange={(e) => onInputChange(e)}
        />
        <label>Employee DOB:</label>
        <input 
          type="num" 
          required 
          name="dob"
          value={dob}
          onChange={(e) => onInputChange(e)}
        />
        <label>Employee Address:</label>
        <input 
          type="text" 
          required 
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
        />
        <label>About Employee:</label>
        <textarea
          required
          name="about"
          value={about}
          onChange={(e) => onInputChange(e)}
        ></textarea>
        
        <button>Update User</button>
      </form>

    </div>
    )
}

export default EditUser;