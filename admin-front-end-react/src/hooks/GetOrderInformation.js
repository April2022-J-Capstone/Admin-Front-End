import { useState, useEffect } from 'react';

const GetOrderInformation = (length) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(
            `http://localhost:8080/order-service/3/orders`, // pass this as a variable
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

export default GetOrderInformation;