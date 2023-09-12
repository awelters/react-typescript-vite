import { useContext } from "react";
import CounterContext from "./CounterContext";

export default function CounterButtons() {
  const { count, setCount } = useContext(CounterContext);

  const incHandler = () => {
    setCount(count + 1);
  };
  
  return (
    <p>
      <button onClick={incHandler}>Increment</button>
    </p>
  );
}