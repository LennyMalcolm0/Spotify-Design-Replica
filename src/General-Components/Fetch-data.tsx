import { useState, useEffect } from 'react';

const FetchData = (url: any) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setInterval(() => {
          fetch(url)
            .then(res => {
              if (!res.ok) {
                throw Error("Could not load Name");
              } else {
                return res.json();
              }
            })
            .then(data =>{
              setLoading(false)
              setData(data);
            })
            .catch(err => {
              setLoading(false)
              setError(err.message)
            })
        }, 2000);
    }, []);
      
    return { data, loading, error }
}
 
export default FetchData;