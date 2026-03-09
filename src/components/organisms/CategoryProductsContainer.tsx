/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { ProductType } from "../../type/types";
import { Container,Grid } from "@chakra-ui/react"
import ProductGridItem from "../molecules/ProductGridItem";

const CategoryProductsContainer = () => {
    const { slug } = useParams<{ slug: string }>();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if (!slug) return;
        fetch(`https://dummyjson.com/products/category/${slug}`)
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .finally(() => setLoading(false));
    }, [slug]);
    if (loading) return <p>Loading...</p>;

    return (
        <Container>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {
                    products.map((product,key) => (
                        <ProductGridItem product={product} key={key}/>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default CategoryProductsContainer