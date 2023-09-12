import { useContext } from "react";
import CounterContext from "./CounterContext";

export default function CounterResult() {
  const { contextName, count } = useContext(CounterContext);

  return <>{contextName} with useContext is {count}</>;
}
