import React, { useState } from 'react'

import axios from 'axios'
import { NavBar } from './NavBar'

export const AddPatient = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "id":"",
            "blood":"",
            "mobno":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8089/add",data).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("successfully added")
              
            } else {
              alert("error")
              
            }
          }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
      }
  return (
    <div>
        <h1><center>ADD PATIENT DETAILS</center></h1>
        <NavBar></NavBar>
         <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">patient name</label>
                        <input type="text" className="form-control"name='name'value={data.name}onChange={inputHandler}></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">id</label>
                        <input type="text" className="form-control"name='id'value={data.id}onChange={inputHandler}></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">blood group</label>
                        <select name="" id="" className="form-control"name='blood'value={data.blood}onChange={inputHandler}>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">mobile no</label>
                        <input type="text" className="form-control" name='mobno'value={data.mobno}onChange={inputHandler}></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success"onClick={readVlue}>register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}