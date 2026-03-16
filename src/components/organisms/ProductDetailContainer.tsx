import { Container, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import PageHeader from "../molecules/PageHeader";
import type { ProductType } from "../../lib/type/types";
import ProductDescription from "../molecules/ProductDescription";
import ProductOverview from "../molecules/ProductOverview";

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

    return (
        <Container marginTop={"1.5rem"}>
            <Grid templateColumns={"repeat(12,1fr)"} gap={5}>
                <GridItem colSpan={9}>
                    <PageHeader title={product?.title} brand={product?.brand} />
                    <p>Ürün Görselleri Carousel Images</p>
                    <ProductDescription productDescription={product_description} />
                </GridItem>
                <GridItem colSpan={3}>
                    <ProductOverview sku={product?.sku} stock={product?.stock}     minimumOrderQuantity={product?.minimumOrderQuantity} price={product?.price} discountPercentage={product?.discountPercentage} availabilityStatus={product?.availabilityStatus}/>
                </GridItem>
            </Grid>

        </Container>
    )
}

export default ProductDetailContainer