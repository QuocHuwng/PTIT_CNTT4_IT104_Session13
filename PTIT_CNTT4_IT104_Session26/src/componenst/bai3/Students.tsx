import React, { useState, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Students() {
    const [studentName, setStudentName] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStudentName(e.target.value);
    }
    const [name,setSearchParamName] = useSearchParams(); 
    
    const handleClick = () => {
        setSearchParamName({
            name: studentName,
        })
    }
  return (
    <div>
          <input type="text"
            onChange={handleChange}          
          />
          <button onClick={handleClick}>Tim kiem</button>
          <h2>Gia tri vua tim kiem: {name.get("name")}</h2>
    </div>
  )
}
