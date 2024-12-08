import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { InicialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


//Context de productos:
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

//Propiedades de mi ProductCard
export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    inicialValues?: InicialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, inicialValues }: Props) => {

    const { counter, maxCount, isMaxCountReached, reset, increaseBy } = useProduct({ onChange, product, value, inicialValues })

    return (
        <Provider value={{ counter, increaseBy, product, maxCount }} >
            <div className={`${styles.productCard} ${className}`} style={style} >

                {
                    children({
                        count: counter,
                        isMaxCountReached: isMaxCountReached,
                        maxCount: inicialValues?.maxCount,
                        product,
                        increaseBy,
                        reset,
                    })
                }

            </div>
        </Provider>
    )
}

export default ProductCard
