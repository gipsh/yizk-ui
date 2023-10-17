import React, { useState } from "react";
import Page from './Page';



function Book(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const currentPageId = pageNumber + props.initalPage;
  console.log(currentPageId);

  function nextPage() {
    if (pageNumber < props.maxPages) {
      setPageNumber(pageNumber + 1);
    }
  }

    function previousPage() {
        if (pageNumber > 0) {
        setPageNumber(pageNumber - 1);
        }
    }

  return (
    <div>
        <div>
            {props.name}
        </div>
        <Page
            originalImage={"books/" + props.folder + "/" + currentPageId + ".jpg"}
            translatedImage={"books/" + props.folder + "/" + currentPageId + ".render.png"}
        />
            <button onClick={previousPage}>Back</button>
            <button onClick={nextPage}>Next</button>
    </div>
    
  );
}

export default Book;