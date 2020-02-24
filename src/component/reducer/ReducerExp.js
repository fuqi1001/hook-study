import React, { useReducer, Fragment } from 'react';
import './ReducerExp.scss';

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1};
    case 'DECREMENT':
      return { count: state.count - 1};
    default:
      throw new Error(); 
  }
}

function Counter() {
  /* useReducer(reducer, state); */
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      Count: {state.count}
      <div className="btn-group">
        <button className='btn' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button className='btn' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      </div>
      
    </Fragment>
  )
}

export default Counter;