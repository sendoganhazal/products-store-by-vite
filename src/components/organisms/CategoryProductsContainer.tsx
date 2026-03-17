import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Grid, Spinner, Center, Container } from "@chakra-ui/react";
import CategoryProductFilters  from "../molecules/CategoryProductFilters";
import type { SortKey } from "../molecules/CategoryProductFilters";
import ProductCard from "../atoms/ProductCard"; // Component ismin farklıysa güncelle
import type { ProductType } from "../../lib/type/types";

const CategoryProductsContainer = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [sortKey, setSortKey] = useState<SortKey | null>(null);

    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
                const data = await res.json();
                setProducts(data.products);
                setSortKey(null); // Yeni kategori gelince sıralamayı sıfırla
            } catch (error) {
                console.error("Fetch hatası:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    const sortedProducts = useMemo(() => {
        const items = [...products];
        switch (sortKey) {
            case "price":
                return items.sort((a, b) => a.price - b.price);
            case "rating":
                return items.sort((a, b) => b.rating - a.rating);
            case "title":
                return items.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return items;
        }
    }, [products, sortKey]);

    if (loading) {
        return (
            <Center p={20}>
                <Spinner size="xl" color="pink.500" />
            </Center>
        );
    }

    return (
        <Container>
            <CategoryProductFilters onSort={(key) => setSortKey(key)} />
            <Grid 
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
                gap={6}
            >
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Container>
    );
};
export default CategoryProductsContainer;