import React, { useState } from 'react'

import axios from 'axios'
import { NavBar } from './NavBar'

export const DeletePatient = () => {
    const [data,setData]=useState(
        {
          "name":""
        }
      )

      const [result,setResult]=useState([])
      //value fetching
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8089/search",data).then(
            (response)=>{
              setResult(response.data)
              
            }
          ).catch(
            (error)=>{
              console.log(error.message)
              alert(error.map)
            }
          ).finally()
      }
      //delete function
      const deleteValue=(id)=>{
        console.log(data)
         let input={"_id":id}
         axios.post("http://localhost:8089/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully deleted")
                } else {
                    alert("error")
                }
            }
         ).catch().finally()
    }
  return (
    <div>
        <h1><center>DELETE PATIENT</center></h1>
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
                        <br /><br /><button className="btn btn-primary" onClick={readVlue}>search</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table" border="1">
                    <thead>
                      <tr>
                        <th scope="col">patient name</th>
                        <th scope="col">mobile no</th>
                        <th scope="col">id</th>
                        <th scope="col">blood group</th>
                      </tr>
                    </thead>
                    
                    {result.map(
                        (value,index)=>
                            {
                                return <tbody>
                                <tr>
                                  <td>{value.name}</td>
                                  <td>{value.mobno}</td>
                                  <td>{value.id}</td>
                                  <td>{value.blood}</td>
                                  <td><button className="btn btn-danger" onClick={()=>{deleteValue(value._id)}}>delete</button></td>
                                </tr>
                                </tbody>
                            }
                    )}
                  </table>
            </div>
        </div>
    </div>
    </div>
  )
}
