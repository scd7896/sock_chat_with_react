import React,{useContext, useCallback} from 'react'
import {thisContext} from '../index'

const MessageLog = ()=>{
    const context = useContext(thisContext)

    
    const useMessage = useCallback(()=>{
      
        return (
          <div>
              {context.getState().message.map((el, i)=>{
                return(
                  <div key = {i}>
                    <p>{el.name} : {el.message}</p>
                  </div>
                )
              })}
          </div>)
    },[context.getState().message])
    return(
        useMessage()
    )
}

export default MessageLog