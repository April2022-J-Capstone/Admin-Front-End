import { useState, useEffect } from 'react';

const useAsyncRequest = (length) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(
            `http://localhost:8081/user/all`,
            {
              method: "GET",
              headers: new Headers({
              })
            }
          )
            .then(res => res.json())
            .then(response => {
              setData(response);
              setLoading(false);
            })
            .catch(error => console.log(error));
    }, [length]);

    return [data, loading]

}

export default useAsyncRequest;