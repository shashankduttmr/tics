import React from "react"
import {FaPen, FaTimes, FaRegCircle} from "react-icons/fa"



function Icons({name}){
    switch(name){
        case "circle":
            return <FaRegCircle/>
        case "cross":
            return <FaTimes/>
        default:
            return <FaPen/>
    }
}

export default Icons