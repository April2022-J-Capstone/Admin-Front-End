import { useState, useEffect } from 'react';

export const GetEntryData = (dataType) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    let length = 0;

    useEffect(() => {
        fetch(
            `http://localhost:8085/${dataType}`, // pass this as a variable
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