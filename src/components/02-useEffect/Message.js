import React, { useEffect } from 'react';


const Message = () => {

  useEffect(() => {
    
    console.log('Message component mounted');

    return () => {
      console.log('Message component DISMOUNTED');
    }
  }, []); 

  return(
    <div>
      <h1>You're great</h1>
    </div>
  );
}

export default Message;