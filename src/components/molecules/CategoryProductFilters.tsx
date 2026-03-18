import { Flex, Box, Container, Input, InputGroup, Portal, createListCollection, Select } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

// Sıralama kriterleri için tip tanımlayalım
export type SortOption = "price-asc" | "price-desc" | "rating-desc" | "title-asc" | "title-desc";

interface Props {
    onSort: (value: SortOption) => void;
    onSearch: (value: string) => void;
}

const CategoryProductFilters = ({ onSort, onSearch }: Props) => {
    const sortOptions = createListCollection({
        items: [
            { label: "Price: Low to High", value: "price-asc" },
            { label: "Price: High to Low", value: "price-desc" },
            { label: "Highest Rated", value: "rating-desc" },
            { label: "Title: A-Z", value: "title-asc" },
            { label: "Title: Z-A", value: "title-desc" },
        ],
    });
    return (
        <Container>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4} align={{ base: "stretch", md: "center" }} justify={{ base: "center", md: "space-between" }} paddingTop={"1.25rem"} paddingBottom={"1.25rem"}>
                <Box>
                    <InputGroup flex="1" maxW="300px" startElement={<LuSearch />}>
                        <Input
                            placeholder="Search products..."
                            variant="outline"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </InputGroup>
                </Box>
                <Flex flexWrap={"wrap"} gap={2} alignItems={"center"} >
                    <Select.Root
                        collection={sortOptions}
                        size="sm"
                        width="240px"
                        onValueChange={({ value }) => onSort(value[0] as SortOption)}
                    >
                        <Select.HiddenSelect />
                        <Select.Control>
                            <Select.Trigger>
                                <Select.ValueText placeholder="Sort by..." />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                                <Select.Indicator />
                            </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                            <Select.Positioner>
                                <Select.Content>
                                    {sortOptions.items.map((option) => (
                                        <Select.Item item={option} key={option.value}>
                                            {option.label}
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>

                </Flex>
            </Flex>
        </Container>
    )
}

export default CategoryProductFilters