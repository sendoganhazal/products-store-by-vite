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
const [searchQuery, setSearchQuery] = useState<string>("");
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

   const filteredAndSortedProducts = useMemo(() => {
        // 1. Önce Arama Filtresi (Case-insensitive)
        let result = products.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // 2. Sonra Sıralama
        if (sortKey) {
            result = [...result].sort((a, b) => {
                switch (sortKey) {
                    case "price": return a.price - b.price;
                    case "rating": return b.rating - a.rating;
                    case "title": return a.title.localeCompare(b.title);
                    default: return 0;
                }
            });
        }

        return result;
    }, [products, sortKey, searchQuery]);

    if (loading) {
        return (
            <Center p={20}>
                <Spinner size="xl" color="pink.500" />
            </Center>
        );
    }

    return (
        <Container>
            <CategoryProductFilters onSort={(key) => setSortKey(key)} onSearch={(val) => setSearchQuery(val)}/>
            <Grid 
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
                gap={6}
            >
                {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Container>
    );
};
export default CategoryProductsContainer;