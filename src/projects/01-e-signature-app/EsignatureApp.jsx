import React, { useState } from 'react'
import Title from '../components/Title'

const EsignatureApp = () => {
    const [name, setName] = useState("")
    const [date, setDate] = useState("Date")
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const  inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0"
    }
    document.body.style.background = "#eee"
  return (
    <div className='container text-center'>
        <Title classes={"title"} text={name}/>
        <Title classes={"main-title"} text={date}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente nostrum fugit distinctio quaerat nihil cupiditate, asperiores cum sunt, quae aliquid dolorem quas nobis suscipit deleniti beatae consectetur facere quasi.</p>
        <footer className='d-flex' style={{justifyContent:"space-around", position:"relative", top: "40vh"}}>

        <input type="date"  value={date} style={inputStyle} onChange={handleDateChange}/>
        <input type="text"  value={name} style={inputStyle} onChange={handleNameChange}/>

        </footer>
    </div>
  )
}

export default EsignatureApp