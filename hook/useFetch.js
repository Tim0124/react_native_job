import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'a0c4cfacacmshdd1bbde39110a8ap176d2fjsnd0b26d03b1a0',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query}, 
  };

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      console.error('error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch}
}

export default useFetch