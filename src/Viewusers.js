import React from 'react'
import {useParams} from "react-router";
function Viewusers(props) {
    const {name}=useParams();
  return (
    <div>
        <h1>Welcome {name}</h1>
    </div>
  )
}

export default Viewusers