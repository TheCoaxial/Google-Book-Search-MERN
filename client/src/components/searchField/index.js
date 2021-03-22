import React from "react";

function SearchForm(props) {
    return (
        <form className="search">
            <div>
                <label htmlFor="Book Results"><p>Search for a book</p></label>
                <input 
                    value={props.search}
                    onChange={props.handleInputChange}

                    list="books"
                    type="text"

                    placeholder="Enter a book title to search for!"
                    id="bookSearch"

                />

                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-info">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;