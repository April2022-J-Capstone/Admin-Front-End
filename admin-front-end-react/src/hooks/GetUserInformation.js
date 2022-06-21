import { useState, useEffect } from 'react';

const GetUserInformation = (length) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch( // consider using axios instead
            // `http://localhost:8081/user/all`, // pass this as a variable
            `http://localhost:8080/user-microservice/user/allUserInformation`, // pass this as a variable
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