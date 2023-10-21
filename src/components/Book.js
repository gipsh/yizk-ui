import React, { useState, useEffect } from "react";
import Page from "./Page";

const Book = (props) => {
    const { name, folder, initialPage, maxPages } = props;
    const [pageNumber, setPageNumber] = useState(0);
    //const currentPageId = pageNumber + props.initalPage;

    useEffect(() => {
        if (initialPage) setPageNumber(parseInt(initialPage));
    }, [initialPage]);

    function nextPage() {
        if (pageNumber < parseInt(initialPage) + parseInt(maxPages)) {
            setPageNumber(pageNumber + 1);
        }
    }

    function previousPage() {
        if (pageNumber > parseInt(initialPage)) {
            setPageNumber(pageNumber - 1);
        }
    }

    return (
        <div>
            <div>{props.name}</div>
            <Page
                originalImage={"/books/" + props.folder + "/" + pageNumber + ".jpg"}
                translatedImage={"/books/" + props.folder + "/" + pageNumber + ".render.png"}
            />
            <div>
            <button onClick={previousPage}>Back</button>
            <button onClick={nextPage}>Next</button>
            </div>
            <div>
                Go to page:        
               <input 
               type="number" 
               value={pageNumber - parseInt(initialPage) + 1} 
               //onChange={(e) => setPageNumber(e.target.value + parseInt(initialPage) - 1)} 
               />
            </div>
        </div>
    );
};

export default Book;
