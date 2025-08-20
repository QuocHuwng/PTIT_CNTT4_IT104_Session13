import React from 'react'

export default function UserInfo() {
  const user = {
    fullName: "Nguyen Van A",
    gender: "Nam",
    birth: "06/03/2024",
    email: "abc@gmial.com",
    addres: "Thanh Xuan, Ha Noi"
  };
  return (
    <div>
      <h2>Thong tin ca nhan</h2>
      <ul>
        <li>Ho va ten: <b>{user.fullName}</b></li>
        <li>Gioi tinh: <b>{user.gender}</b></li>
        <li>Ngay sinh: <b>{user.birth}</b></li>
        <li>Gmail: <b>{user.email}</b></li>
        <li>Dia chi: <b>{user.addres}</b></li>
      </ul>
    </div>
  )
}