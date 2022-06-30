import { useState, useEffect } from 'react';
import { getUrl } from '../utils';

const GetRestaurantInformation = (length) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(getUrl("/restaurant-service/restaurants"),
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

export default GetRestaurantInformation;