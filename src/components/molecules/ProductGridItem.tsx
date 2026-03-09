/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, GridItem } from "@chakra-ui/react"
import type { ProductType } from "../../type/types"
import ProductCard from "../atoms/ProductCard"
interface ProductProps {
  product: ProductType
}


const ProductGridItem = ({product}:ProductProps) => {
  return (
    <GridItem>
        <ProductCard product={product}/>
    </GridItem>
  )
}

export default ProductGridItem