import React, { useState } from 'react'

import axios from 'axios'
import { NavBar } from './NavBar'

export const SearchPatient = () => {
    const [data,setData]=useState(
        {
          "name":""
        }
      )


     const [result,setResult]=useState([])

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

  return (
    <div>
        <h1><center>SEARCH PATIENT</center></h1>
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
                        <br /><br /><button className="btn btn-warning" onClick={readVlue}>search</button>
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
