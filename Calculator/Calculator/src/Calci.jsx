import React from 'react'

const Calci = () => {

    const Char = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, "+", "-"], ["*", "/", "C"]]


    return (
        <div>{Char.map((items,index)=>{ return ( <ul key={index}>{items}</ul>  )})}</div>
    )
}

export default Calci