import React from "react"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react";
function App() {
const [message,setMessage] = useState("");
const [messages, setMessages] = useState([]);

const fetchMessages = () => {
  axios.get("http://localhost:3000/")
  .then(res => setMessages(res.data))
  .catch(err=>console.error(err))
}
useEffect(()=>{
  fetchMessages();
},[])

const handleClick = () =>{
  if (!message) return;

  axios.post("http://localhost:3000/", {message})
    .then(res=> {
      console.log(res.data)
      setMessage("")
      fetchMessages()
    })
    .catch(err=>console.error(err))
}
  return (
    <>
    <div>
      <label>
        Enter your message:
      </label>
       <textarea 
       value={message}
       onChange={e=>setMessage(e.target.value)}
       />

      <button onClick={handleClick}>Send</button>

      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
