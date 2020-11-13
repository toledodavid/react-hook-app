import React from 'react';
import PropTypes from 'prop-types';


const ShowIncrement = React.memo(({increment}) => {

  console.log('ShowIncrement component rendered');

  return(
    <button className="btn btn-primary" onClick={() => increment(5)}>Increment</button>
  );
})


ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
};

export default ShowIncrement;