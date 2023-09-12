import { useReducer, FunctionComponent } from 'react'

// An enum with all the types of actions to use in our reducer
enum CountActionKind {
  INCREMENT = 'INCREMENT',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction): CountState {
  const { type } = action;
  switch (type) {
    case CountActionKind.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
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
    <button onClick={() => { dispatch({ type: CountActionKind.INCREMENT }) } }>Component Count with useReducer is {state.count}</button>
  );
};

export default Counter;