import React, { useEffect, useState } from 'react';


const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0});

  const {x, y} = coords;


  useEffect(() => {
    
    console.log('Message component mounted');

    const mouseMove = (ev) => {
      const coords = {x: ev.x, y: ev.y};
      console.log(coords);
      setCoords(coords);
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('Message component DISMOUNTED');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []); 

  return(
    <div>
      <h1>You're great</h1>

      <p>X: {x}, Y: {y}</p>
    </div>
  );
}

export default Message;