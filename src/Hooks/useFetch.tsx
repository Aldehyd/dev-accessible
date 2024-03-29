import { useState, useEffect } from 'react';

export const useFetch = (url)=> {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
      setLoading(true)
      setData(null);
      setError(false);

      fetch(url)
      .then(res => {
          setLoading(false);
          setData(res);
          console.log(res)
      })
      .catch(err => {
          setLoading(false)
          setError(true)
      })
  }, [url])

  return { data, loading, error }

}