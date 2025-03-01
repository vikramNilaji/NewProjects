import React from 'react'

const ImageSlider = (url, limit) => {
  const [Image, setImage] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, seLoading] = useState()

  const fetchImages = async () => {
    try {
      const response = fetch('dummyjson.com/image')
      const data = await response.json()
    } catch (e) {
      setErrorMsg(e.message)
    }
  }

  useEffect(() => {
    if (url !== '') fetchImages(url)
  }, [])

  return <div clasName='Contanier' />
}

export default ImageSlider
