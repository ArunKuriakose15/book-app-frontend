import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewBook = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/book/view").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
  return (
    <div>
        
        <NavBar/>

        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Publisher</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return<tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.author}</td>
                                            <td>{value.price}</td>
                                            <td>{value.publisher}</td>
                                          </tr>


                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewBook