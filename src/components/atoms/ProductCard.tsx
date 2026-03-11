/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, Image, Text, RatingGroup, Button } from "@chakra-ui/react"
import type { ProductType } from "../../lib/type/types"
import { useCart } from "../../lib/hooks/useCart"
interface ProductProps {
  product: ProductType
}


const ProductCard = ({ product }: ProductProps) => {
  const { addToCart } = useCart();

  return (
    <Card.Root>
      <Image alt={product.title} src={product.thumbnail} />
      <Card.Body gap={"2"}>
        <Card.Title>{product.title}</Card.Title>
        {product.brand && (
          <Card.Description>
            {product.brand}
          </Card.Description>
        )}
        <RatingGroup.Root readOnly count={5} value={product.rating} colorPalette={"yellow"} size="sm">
          <RatingGroup.Label textStyle={"md"} fontWeight={"medium"} color={"gray.600"}>{product.rating}</RatingGroup.Label>
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2" color={"purple.500"}>
          {product.price} $
        </Text>

      </Card.Body>
      <Card.Footer gap={2} justifyContent="flex-end">
        <Button variant="solid" colorPalette={"teal"} onClick={() => addToCart(product)}>Add to Cart</Button>

      </Card.Footer>
    </Card.Root>
  )
}

export default ProductCard