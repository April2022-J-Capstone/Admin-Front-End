
import { useState, useEffect } from 'react';
import { getUrl } from '../utils';

const GetUserInformation = (length) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(getUrl("/user-service/user/all"),
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
              console.log(response)
            })
            .catch(error => console.log(error));
    }, [length]);

    return [data, loading]

}

export default GetUserInformation;