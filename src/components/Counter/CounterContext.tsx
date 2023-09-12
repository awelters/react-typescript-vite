import { createContext } from 'react'

export interface CounterContextInterface {
    contextName: string;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextInterface>({ contextName: '', count: 0, setCount: () => null });
export default CounterContext;