import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
                .then(response => { // returns a promise and response object
                    if(!response.ok) {  // if the object does not respond "ok" then we throw the error
                        throw Error('Could not fetch the data for that resource');
                    } else {    // if it responds "ok" then we return the response json object
                    return response.json();
                }})
                .then((data) => {   // we use the data that we retrieved as a parameter
                    setdata(data); // we set the data to equal that data
                    setIsPending(false);    // we resent pending to false so we don't have the loading message                 
                    setError(null); // we set the error to null so that we don't display the error
                })
                .catch(err => { // here we isolate network type erorrs
                    setIsPending(false);    // we set the pending to false to avoid the loading message
                    setError(err.message);  // we then set the error state to match the error received
                })
        }, 1000);
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;