import React, { useEffect, useState } from 'react'

import ImageSlider from './ImageSlider'

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const FetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )

      if (!response.ok) {
        throw new Error(`There is an Error : ${response.status} `)
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
        ? <h3>
            Caught an Error: {error.message}
        </h3>
        : data
          ? <ul>
            {data.map(user =>
              <li key={user.id}>
                {user.name}
              </li> // ✅ Fixed JSX syntax
              )}
          </ul>
          : <p>Loading... Please wait...</p>}

      <ImageSlider />
    </div>
  )
}
export default App
