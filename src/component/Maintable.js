import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';



export default function Maintable() {
  

  let { id } = useParams();


  const [Users, setUsers] = useState({})

  const getUser = async () => {
    const response = await fetch(`https://mockrestapi.herokuapp.com/api/employee/${ id }`);
    const result = await response.json()
    setUsers(result.data);

  }

  useEffect(() => {
    getUser();
  });
  return (
    <div>
    {
      <table className="table container table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Country</th>
        <th>Address</th>
        <th>Age</th>
        <th>DOB</th>
        <th>About</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{Users.name}</td>
        <td>{Users.phone}</td>
        <td>{Users.email}</td>
        <td>{Users.country}</td>
        <td>{Users.address}</td>
        <td>{Users.age}</td>
        <td>{Users.dob}</td>
        <td>{Users.about}</td>
      </tr>

      
      
    </tbody>
  </table>
  }
    </div>
  )
}



 
