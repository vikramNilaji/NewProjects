import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [value1, setValue1] = useState("")
    const [text,setText]=useState("")
    return (
        <div>

            <input onChange={(e) => setValue1(e.target.value)} type="text" value={value1} />
            <button onClick={()=>setText(value1)}>Click Here</button>
            <p>{text}</p>

        </div>
    )
}

export default Login