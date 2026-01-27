import React from 'react'
function Button ({username ,className}){
    console.log(username)
    return (
        <button className={`m-5 bg-amber-500 ${className}`}>{username}</button>
    )
}

export default Button 