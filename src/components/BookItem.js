

function BookItem(props) {
    return (
      <div>
        <div>
          name: {props.name}        
        </div>
        <div>
          pages: {props.maxPages}
        </div>
        <div>
          cover: ?
        </div>
        <button type="button" id={props.name} className="btn" onClick={props.onClick}>
            Select <span className="visually-hidden">{props.name}</span>
        </button>
      </div>)
  }

export default BookItem;