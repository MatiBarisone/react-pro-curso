import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product, InicialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    inicialValues?: InicialValues;
}

const DEFAULT_VALUE = 0

export const useProduct = ({ onChange, product, value, inicialValues }: useProductArgs) => {
    const initialValue = inicialValues?.count || value || DEFAULT_VALUE;
    const [counter, setCounter] = useState(initialValue)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)
        if (inicialValues?.maxCount) {
            newValue = Math.min(newValue, inicialValues?.maxCount)
        }

        setCounter(newValue)

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValue)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value || initialValue);
    }, [value])

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
        }
    }, [])


    return {
        counter,
        isMaxCountReached: !!inicialValues?.maxCount && counter===inicialValues?.maxCount,
        maxCount: inicialValues?.maxCount,
        increaseBy,
        reset,
    }
}
