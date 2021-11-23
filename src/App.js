import React from "react";
import './App.css';
import Table from "./component/Table";
import Maintable from "./component/Maintable";
import {
  BrowserRouter as Switch,Route,BrowserRouter} from "react-router-dom";
import AddUser from "./component/users/adduser";
import EditUser from "./component/users/EditUser";
import Navbar from "./component/Navbar";

export default class App extends React.Component {

  render() {

    
  
    return (
      <BrowserRouter >
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/user/:id" children ={<Maintable />}  />
        <Route exact path="/" component ={Table}  />
        <Route exact path="/add" component = {AddUser} />
        <Route exact path="/edit/:id" component = {EditUser} />
    



          
        </Switch>
      
        
      </BrowserRouter>
      
    );
  }


}