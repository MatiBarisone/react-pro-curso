import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';
import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1> Shopping Store </h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                inicialValues={{ count: 4, maxCount: 10 }}
            >
                {
                    ({ reset, increaseBy, count, isMaxCountReached, maxCount}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons  />
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}

export default ShoppingPage
