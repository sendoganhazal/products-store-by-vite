import { Container, Grid,GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import PageHeader from "../molecules/PageHeader";
import type { ProductType } from "../../lib/type/types";

const ProductDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    console.log("product", product)
    return (
        <Container>
            <Grid templateColumns={"repeat(12,1fr)"}>
                <GridItem colSpan={9}>
                    <PageHeader title={product?.title} brand={product?.brand} rating={product?.rating}/>
                    <p>Ürün Görselleri Carousel Images</p>
                    <section>
                        <p>Tablı yapı</p>
                        <p>1. tabda description olacak</p>
                        <p>2. tabda ürün özellikleri olacak: marka,kategori, weight, dimensions, shippingInformation,returnPolicy,minimumOrderQuantity</p>
                        <p>3. tabda reviews</p>
                    </section>
                </GridItem>
                <GridItem colSpan={3}>
                    <p>Fiyat</p>
                    <p>SKU</p>
                    <p>Stok adedi</p>
                </GridItem>
            </Grid>
            
        </Container>
    )
}

export default ProductDetailContainer