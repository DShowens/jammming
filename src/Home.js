// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => {
    //     setTimeout(() => {
    //     fetch('http://localhost:8000/blogs')
    //             .then(response => { // returns a promise and response object
    //                 if(!response.ok) {  // if the object does not respond "ok" then we throw the error
    //                     throw Error('Could not fetch the data for that resource');
    //                 } else {    // if it responds "ok" then we return the response json object
    //                 return response.json();
    //             }})
    //             .then((data) => {   // we use the data that we retrieved as a parameter
    //                 setBlogs(data); // we set the blogs to equal that data
    //                 setIsPending(false);    // we resent pending to false so we don't have the loading message                 
    //                 setError(null); // we set the error to null so that we don't display the error
    //             })
    //             .catch(err => { // here we isolate network type erorrs
    //                 setIsPending(false);    // we set the pending to false to avoid the loading message
    //                 setError(err.message);  // we then set the error state to match the error received
    //             })
    //     }, 1000);
    // }, []);

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
                {isPending && <div className='blog-preview-skeleton'>
                        <div>
                            <h2>...</h2>
                            <p>...</p>
                        </div>
                        <div>
                            <h2>...</h2>
                            <p>...</p>
                        </div>
                        <div>
                            <h2>...</h2>
                            <p>...</p>
                        </div>
                        <div>
                            <h2>...</h2>
                            <p>...</p>
                        </div>
                        <div>
                            <h2>...</h2>
                            <p>...</p>
                        </div>
                    </div>}
            {blogs && <BlogList //conditional templating - if no data in "blogs" it will not bother with the "BlogList".
                blogs={blogs} 
                title="All Blogs!"
                
            />}
         </div>
    );
}
 
export default Home;

/* Endpoints List


/blogs          GET     Fetch all blogs

/blogs/{id}     GET     Fetch a single blog

/blogs          POST    Add a new blog

/blogs/{id}     DELETE  Delete a blog


C:\Users\showe\OneDrive\Documents\Don\Codecademy\PROJECTS\React

*/