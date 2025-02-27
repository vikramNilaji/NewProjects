import React, { useEffect, useState } from 'react'

const TryCatch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const FetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    try {
      if (!response.ok) {
        throw new Error(` there is an Error : ${response.status}`)
      } else {
        const result = await response.json()

        setData(result)
      }
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    FetchData()
  }, [])

  return (
    <div>
      {error
        ? <p>
          {' '}Error :{error}
        </p>
        : data
          ? <ul>
            {' '}{data.map(users =>
              <li key={users.id}>
                {users.name}
              </li>
              )}
          </ul>
          : <p> Loading...</p>}
    </div>
  )
}

export default TryCatch
