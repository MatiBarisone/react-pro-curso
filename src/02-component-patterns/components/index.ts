import { ProductCard as ProductCardHoc} from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

//Imports:
import { ProductButtons } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

//Exports:
export { ProductButtons } from "./ProductButton";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCard:ProductCardHOCProps = Object.assign( ProductCardHoc, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;