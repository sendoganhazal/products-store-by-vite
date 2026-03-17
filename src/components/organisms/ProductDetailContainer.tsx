import { Container, Grid, GridItem,Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import PageHeader from "../molecules/PageHeader";
import type { ProductType } from "../../lib/type/types";
import { useCart } from "../../lib/hooks/useCart"
import ProductDescription from "../molecules/ProductDescription";
import ProductOverview from "../molecules/ProductOverview";
import ProductImages from "../molecules/ProductImages";

const ProductDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const product_description = {
        description: product?.description,
        specs: {
            brand: product?.brand,
            category: product?.category,
            returnPolicy: product?.returnPolicy, 
            weight: product?.weight,
            dimensions: product?.dimensions,
            warrantyInformation: product?.warrantyInformation,
            shippingInformation: product?.shippingInformation,
            
        },
        reviews: product?.reviews
    };
    const { addToCart } = useCart();
    return (
        <Container marginTop={"1.5rem"}>
            <Grid templateColumns={{ base: "1fr", md: "repeat(6, 1fr)", lg: "repeat(12, 1fr)" }} gap={5}>
                <GridItem colSpan={{ base: 1, md: 3, lg: 9 }}>
                    <PageHeader title={product?.title} brand={product?.brand} />
                    <ProductImages product_images={product?.images}/>
                    <ProductDescription productDescription={product_description} />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3, lg: 3 }}>
                     <Button
                        variant="solid"
                        colorPalette={"teal"}
                        onClick={() => product && addToCart(product)}
                        disabled={!product}
                     >
                        Add to Cart
                     </Button>

                    <ProductOverview sku={product?.sku} stock={product?.stock}     minimumOrderQuantity={product?.minimumOrderQuantity} price={product?.price} discountPercentage={product?.discountPercentage} availabilityStatus={product?.availabilityStatus}/>
                </GridItem>
            </Grid>

        </Container>
    )
}

export default ProductDetailContainer