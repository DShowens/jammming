import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {

    const [ term, setTerm] = useState('');

    function passTerm() {
        props.onSearch(term);
    };

    function handleTermChange(e) {
        setTerm(e.target.value);
    }

    return ( 
        <div className={styles.SearchBar}>
            <input
                placeholder="Enter a Song, Album, or Artist"
                onChange={handleTermChange}
            />
            <button 
                className={styles.SearchButton}
                onClick={passTerm}     
            >
                SEARCH
            </button>
        </div>
     );
}
 
export default SearchBar;
