import { useContext } from "react";
import CounterContext from "./CounterContext";

export default function CounterResult() {
  const { contextParentName, count } = useContext(CounterContext);

  return <>{contextParentName} with useContext is {count}</>;
}
