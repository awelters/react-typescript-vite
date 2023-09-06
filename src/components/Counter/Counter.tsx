import { useReducer, FunctionComponent } from 'react'

// An enum with all the types of actions to use in our reducer
enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction): CountState {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}

// An example of using the `useReducer` hooks with our reducer function and an initial state
const Counter: FunctionComponent = () => {
  const initialCounterState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  return (
    <>
      <hr/>
      Component Count with useReducer is {state.count}
      <p>
        <button onClick={() => { dispatch({ type: CountActionKind.DECREASE, payload: 1 }) } }>Decrement</button>
        <button onClick={() => { dispatch({ type: CountActionKind.INCREASE, payload: 1 }) } }>Increment</button>
      </p>
    </>
  );
};

export default Counter;