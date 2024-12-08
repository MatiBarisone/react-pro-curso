import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1> Shopping Store </h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className='bg-dark text-white'
                inicialValues={{ count: 4, maxCount: 10 }}
            >
                {
                    ({ reset, increaseBy, count, isMaxCountReached, maxCount}) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle title={''} className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                            <button onClick={reset}> Reset </button>
                            <button onClick={() => increaseBy(-2)}> -2 </button>
                            {
                                (!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>)
                            }
                            <span> {count} - {maxCount} </span>
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}

export default ShoppingPage
