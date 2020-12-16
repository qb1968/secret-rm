import React, { useState } from 'react'
import classes from './Cloud.module.css'
import Name from './Name/Name'
import MessageText from './MessageText/MessageText'
import MessageLink from './MessageLink/MessageLink'

const Cloud = (props) => {
    const [isActive,setIsActive] = useState(true)

    const onMouseHandler = () => {
        setIsActive(!isActive)
    }

    return (
        <div
         className={classes.message}
         onMouseEnter={onMouseHandler}
         onMouseLeave={onMouseHandler}
         >
             <Name/>
             {isActive ? <MessageText/> : <MessageLink pageChanger={props.pageChanger}/>}
            
        </div>
    )
}

export default Cloud
