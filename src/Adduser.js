import React, { useState } from 'react'

function Adduser() {
  const initailValue = {
    username: '',
    email: '',
    phone: '',
  }
  const [inputFieldvalue, setinputFieldvalue] = useState(initailValue)
  function handleValueChange(event) {
    const { name, value } = event.target
    setinputFieldvalue({ ...inputFieldvalue, [name]: value })
  }
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  function valueSubmit() {
    if (inputFieldvalue.username == 'Madhan') 
    { alert('Please enter the Valid User Name') }
    else if (inputFieldvalue.email.match(mailformat)) {
      alert('Please Enter Valid email address')
    }
    else if (inputFieldvalue.phone == '12345') {
      alert("Please enter valid Phone number")
    }
    else { alert(inputFieldvalue.phone) }
  }

  // const [username,setUsername]= useState()
  // const [useremail, setUseremail] = useState()
  // const [phoneno,setPhoneno] = useState()
  // function handleNameChange(event){

  //   setUsername (event.target.value)
  //   }
  // function handleEmailChange(event){
  //   setUseremail(event.target.value)
  // }

  // function handlePhonechange(event){
  //   setPhoneno(event.target.value)
  // }
  return (
    <div className='container'>
      <div>
        <h3 className='text-center'>Add New User</h3>
      </div>
      <div>
        <div>
          <label >Name</label>
          <input type='text' onChange={handleValueChange} className='form-control' name='username'></input>
        </div>
        <div>
          <label>Email</label>
          <input type='email' onChange={handleValueChange} className='form-control' name='email'></input>
        </div>
        <div>
          <label>Phone</label>
          <input type='number' onChange={handleValueChange} className='form-control' name='phone'></input>
        </div>
        <div className='mt-5'>
          <button className='btn btn-primary' onClick={valueSubmit}>Adduser</button>
        </div>
      </div>
      <div>
        {JSON.stringify(inputFieldvalue)}
        <h1>Name - {initailValue.username}</h1> </div>

    </div>
  )
}

export default Adduser