import React from 'react'
import Trow from './Trow'

let Table = (props) => {
    let arr=props.data
  return (
    <table border='1'>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Status</td>
            <td>Gender</td>
        </tr>
        {arr.map((item,index)=>{
            return <Trow item={item}/>
        })}
    </table>
  )
}
export default Table