import { createContext } from 'react'

export interface CounterContextInterface {
    contextParentName: string;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextInterface>({ contextParentName: '', count: 0, setCount: () => null });
export default CounterContext;