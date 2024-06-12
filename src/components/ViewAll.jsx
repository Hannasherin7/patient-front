import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { NavBar } from './NavBar'

export const ViewAll = () => {
  const [data,changeData]=useState([])
  const fetchData=()=>{
      axios.get("http://localhost:8089/view").then(
          (response)=>{
              changeData(response.data)
          }
      ).catch(
        (error)=>{
          console.log(error.message)
          alert(error.map)
        }
      ).finally()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <h1><center>VIEW PATIENT DETAILS</center></h1>
        <NavBar></NavBar>
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
                    
                    {data.map(
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
