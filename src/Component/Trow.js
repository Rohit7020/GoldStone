import React from 'react'
import { useState } from 'react'

let Trow = ({item}) => {
    console.log(item)

    let [name,setName]=useState(item.name)
    let [email,setEmail]=useState(item.email)
    let [status,setStatus]=useState(item.status)
    let [gender,setGender]=useState(item.gender)

function changeName(e){
    console.log(e.target)
}
  return (
    <tr>
        <td>{name} </td>
        <td>{email}</td>
        <td>{status}</td>
        <td>{gender}</td>
    </tr>
  )
}

export default Trow