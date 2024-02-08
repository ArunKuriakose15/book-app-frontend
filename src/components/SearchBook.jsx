import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchBook = () => {
    const [input, setInput] = new useState(
        {
            name: ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const [output, setOutput] = useState([]);


    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/book/search", input).then((response) => {
            setOutput(response.data)
            console.log(response.data)


        })
    }
    useEffect(() => { readValues() }, [])
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary" onClick={readValues}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
                                    output.map(
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

export default SearchBook