import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='container'>
     <div className='mb-5'>
     <Link to='/add-user'>
      <button className='btn btn-warning'>Add User</button>
      </Link>
     </div>
      <table className='table'>
        <thead><tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>

        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Madhan</td>
            <td>madhankumar0203@gmail.com</td>
            <td>Devloper</td>
            <td><Link to='/viewusers/Madhan'><button className='btn btn-danger'>View</button></Link></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Karthi</td>
            <td>karthikdivy@gmail.com</td>
            <td>Manufacturer</td>
            <td><Link to='/viewusers/Karthik'><button className='btn btn-danger'>View</button></Link></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Maddy</td>
            <td>maddy0203@gmail.com</td>
            <td>Love</td>
            <td><Link to='/viewusers/Maddy'><button className='btn btn-danger'>View</button></Link></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default User