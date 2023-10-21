

function BookItem(props) {
  console.log(process.env.PUBLIC_URL + "/" + props.folder + "/" + props.cover)
    return (
      <div>
        <div>
          name: {props.name}        
        </div>
        <div>
          pages: {props.maxPages}
        </div>
        <div>
          <img 
              src={process.env.PUBLIC_URL + "/books/" + props.folder + "/" + props.cover}   
              alt={props.name}       />
        </div>
        <button type="button" id={props.name} className="btn" onClick={props.onClick}>
            Select <span className="visually-hidden">{props.name}</span>
        </button>
      </div>)
  }

export default BookItem;
