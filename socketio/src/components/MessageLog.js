import React,{useContext} from 'react'
import {thisContext} from '../index'
const MessageLog = ()=>{
    const context = useContext(thisContext)
    return(
        <div>
              {context.getState().message.map((el, i)=>{
                return(
                  <div key = {i}>
                    <p>{el.name} : {el.message}</p>
                  </div>
                )
              })}
        </div>
    )
}

export default MessageLog