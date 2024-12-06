import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';
import '../styles/custom-styles.css'

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
                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={''} className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                {/* Forma 2 */}
                <ProductCard
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage
                        className="custom-image"
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />
                    <ProductTitle title={''} className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                {/* Estilos por Styles */}
                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />
                    <ProductTitle
                        title={''}
                        style={{
                            fontWeight: 'bold'
                        }}
                    />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

            </div>

        </div>
    )
}

export default ShoppingPage
