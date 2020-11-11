import React, { useRef } from 'react';
import '../02-useEffect/effects.css';


const FocusScreen = () => {

  const inputRef = useRef();
  //console.log(inputRef);

  const handleClick = () => {
    //document.querySelector('input').select();
    inputRef.current.select();
  }

  return(
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input ref={inputRef} className="form-control" placeholder="Your name" />

      <button className="btn btn-outline-primary mt-4" onClick={handleClick}>Focus</button>
    </div>
  );
}


export default FocusScreen;