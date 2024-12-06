import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1> Shopping Store </h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* Forma 1 */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={''} />
                    <ProductCard.Buttons />
                </ProductCard>

                {/* Forma 2 */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={''} />
                    <ProductButtons />
                </ProductCard>
            </div>

        </div>
    )
}

export default ShoppingPage
