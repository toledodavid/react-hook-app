import React from 'react';



const Small = React.memo(({value}) => {

  console.log('Small component rendered!!');

  return(
    <small>{value}</small>
  );
})

export default Small;