import axios from "axios";
import React from "react";


export default class Table extends React.Component {

  
    

  state = {
    loading: true,
    person: null,
    pageNo:1,
    value: "",
    search:""
  };
  


  async componentDidMount() {
  

    const url = "https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=10";
    const response = await fetch(url);
    const result = await response.json();
    
    this.setState({person: result.data, loading: false, 
      totalData: result.total
      
      
      
    })
  }

  deleteRow = async(id) =>{      
    await axios.delete(`http://mockrestapi.herokuapp.com/api/employee/${id}`);
    window.location.href = '/';
 }  

 handlePrevClick = async () => {
    console.log("clicked Previous");
    
    
    const url = `https://mockrestapi.herokuapp.com/api/employee?pageNo=${this.state.pageNo - 1}&limit=10`;
    const response = await fetch(url);
    const result =  await response.json();
    this.setState({person: result.data, loading: false, 
      
    pageNo: this.state.pageNo - 1 })
    
 }

 handleNextClick = async () => {






  console.log("clicked Next");
  if(this.state.pageNo+1 > Math.ceil (this.state.totalData/10)){
   

  }
  else {

    const url = `https://mockrestapi.herokuapp.com/api/employee?pageNo=${this.state.pageNo + 1}&limit=10`;
    const response = await fetch(url);
    const result =  await response.json();
    this.setState({person: result.data, loading: false, 
    pageNo: this.state.pageNo + 1 })
    
  
}
 
  




  
}

 getData=(e)=>{
  //  console.log(e.target.value);
   this.setState({value: e.target.value
  
  })
 }


 handleSubmitByName= async (e)=>{
  e.preventDefault()
  const value = this.state.value;
  console.log(value)
    const url = `https://mockrestapi.herokuapp.com/api/employee?name=${value}&pageNo=${this.state.pageNo}&limit=undefined`;
    const response = await fetch(url);
    const result = await response.json();
    this.setState({search: result.data,
    person:result.data,
    pageNo: this.state.pageNo

    })


    console.log(result.data)

 }


 handleSubmitByCountry= async (e)=>{
  e.preventDefault()
  const value = this.state.value;
  console.log(value)
    const url = `https://mockrestapi.herokuapp.com/api/employee?country=${value}&pageNo=${this.state.pageNo}&limit=undefined`;
    const response = await fetch(url);
    const result = await response.json();
    this.setState({search: result.data,
    person:result.data,
    pageNo: this.state.pageNo


    })


    console.log(result.data)

 }


 handleSubmitByPhone= async (e)=>{
  e.preventDefault()
  const value = this.state.value;
  console.log(value)
    const url = `https://mockrestapi.herokuapp.com/api/employee?phone=${value}&pageNo=${this.state.pageNo}&limit=undefined`;
    const response = await fetch(url);
    const result = await response.json();
    this.setState({search: result.data,
    person:result.data,
    pageNo: this.state.pageNo


    })


    console.log(result.data)

 }


  

  

  render() {
    // console.log(this.state)
    return (
     
      
      <div>
        {this.state.loading || !this.state.person ? ( <div><h1>Table Data Loading.....</h1></div> ) : 
        (
         <>
          

         <div className="text-center my-2">
         <div className="row align-items-start">
          <div className="col">
         <form>
            <input type = "text" label="Search Name" placeholder="Search by Name" onChange={this.getData}  />
           <button className="btn btn-outline-secondary  btn-sm " onClick={this.handleSubmitByName}>Search</button>
           </form>
           </div>


           <div className="col">
           <form>
            <input type = "text" label="Search Name" placeholder="Search by country" onChange={this.getData}  />
           <button className="btn btn-outline-secondary  btn-sm " onClick={this.handleSubmitByCountry}>Search</button>
           </form>
           </div>


           <div className="col">
           <form>
           <input type = "text" label="Search Name" placeholder="Search by Phone No." onChange={this.getData}  />
           <button className="btn btn-outline-secondary  btn-sm " onClick={this.handleSubmitByPhone}>Search</button>
           </form>
           </div>


           </div>
         
         </div>
         
         
      
         <table className="table container table table-bordered">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Country</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
  {this.state.person.map((d) =>(

    <tr key={d._id}>
      <td>{d.name}</td>
      <td>{d.phone}</td>
      <td>{d.email}</td>
      <td>{d.country}</td>
      
      <td> 
      
      <a className="btn btn-outline-info " href={`/user/${d._id}`}>View Detail</a>
      <button className="btn btn-outline-danger mr-2" onClick={() => this.deleteRow(d._id)} >Delete </button>
      <a className="btn btn-outline-warning "  href={`/edit/${d._id}`}>Update </a>
      </td>
    </tr>
  ))}
    
  </tbody>
</table>

{!this.state.search ?(

<div className="container d-flex justify-content-between"> 
        <button disabled = {this.state.pageNo <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.pageNo+1 > Math.ceil (this.state.totalData/10)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
        ):
        <div>

        </div>
        }

          
         </>
          
         
         
         

        )}
        
        
      </div>
      
      
    );
  }


}