import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();

    useEffect(() => {
        setTimeout(() => {
        fetch(url, { signal: abortCont.signal }) // enter 2nd parameter as abortCont.signal to associate the fetch with this fetch
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
                    if (err.name === 'AbortError') {
                    } else {
                        setIsPending(false);    // we set the pending to false to avoid the loading message
                        setError(err.message);  // we then set the error state to match the error received
                    }
                })
        }, 1000);

        // return () => abortCont.abort();  // abort controller associated with abortCont & the fetch 2nd parameter

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;