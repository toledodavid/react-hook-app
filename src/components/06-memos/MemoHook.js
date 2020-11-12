import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavy_process';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';


const MemoHook = () => {

  const { counter, increment } = useCounter(5000);

  const [ show, setShow ] = useState(true);


  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return(
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{counter}</small></h3>
      <hr/>

      <p>{memoHeavyProcess}</p>

      <button className="btn btn-primary mt-3" onClick={() => increment()}>+1</button>

      <button className="btn btn-info mt-3 ml-3" onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
}

export default MemoHook;