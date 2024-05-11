import React from 'react';
import styles from "./SearchResults.module.css";
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {

    return ( 
        <div className={styles.SearchResults}>
            {/* <!-- Add a TrackList component --> */}
            <Tracklist 
                userSearchResults={props.userSearchResults} 
                onAdd={props.onAdd} 
                isRemoval={false} 
            />
        </div>
     );
}
 
export default SearchResults;

