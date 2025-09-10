import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function UserManger() {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById("scroli");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location])
  return (
    <div>
      Trang quan ly nguoi dung
      <p id='scroli'>scroli den element mong muon</p>
    </div>
  )
}
