import React,{useEffect, useState, useContext} from 'react';
import io from 'socket.io-client'
import {thisContext} from './index'
import MessageLog from './components/MessageLog'

function App() {
  const context = useContext(thisContext)
  const [socket, setSocket] = useState(io.connect('http://localhost:9080'))
  const [chat, setChat] = useState("")
  const [name, setName] = useState("")
  
  useEffect(()=>{
    
    socket.on('chat-msg', (obj)=>{      
      context.dispatch({
        type : "ADD_MESSAGE",
        data : obj
      })
      setChat("")
    })

  },[])
  const sendMessage = (e)=>{
    e.preventDefault();
    socket.emit("chat-msg",  {
      name: name,
      message: chat
    })
    
    setChat(" ")
    
  }
  const changeChat = (e)=>{
    setChat(e.target.value)
  }
  const changeName = (e)=>{
    setName(e.target.value)
  }
  return (
    
      <div className="App">
            <h1>김서버의 채팅방 tjjjjtt</h1>
            <MessageLog />
            <form onSubmit = {sendMessage}>
              <div>
                <div>
                  이름 : <input type = "text" value = {name} onChange = {changeName} />
                </div>
                <div>
                  메세지 : <input type = "text" value = {chat} onChange ={changeChat} />
                </div>
                <button>전송</button>
              </div>
            </form>
      </div>
    
  );
}

export default App;
