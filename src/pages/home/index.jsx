import React, { useState, useCallback} from "react";
import {useNavigate} from 'react-router-dom'
const Homepage = () => {

    const [value,setValue] = useState();
    const navigate = useNavigate()
    const handleJoinRoom =useCallback(()=> {
        navigate(`room/${value}`)

    },[navigate,value])
    return (<div>
        <input  value={value} 
        onChange={ (e) =>setValue(e.target.value) }
        type="text" placeholder="enter room code"/>
        <br />
        <button  onClick={handleJoinRoom}>join now</button>
    </div>
    );
}
export default Homepage;