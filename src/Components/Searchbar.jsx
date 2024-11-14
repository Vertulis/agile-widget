
import React from 'react';
import styles from "../Modules/Searchbar.module.css"

function Searchbar({ location, suggestions, handleInputChange, handleFormSubmission, handleSuggestionClick }) {
    return (
        <form className={styles.searchbar} onSubmit={handleFormSubmission}>
            <input
            className={styles.searchbarInput}
                type="text"
                value={location}
                onChange={handleInputChange}
                placeholder="Enter a city"
                required
            />
            <button className={styles.submitBtn} type="submit">Get weather</button>
            
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((city, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
}

export default Searchbar;
