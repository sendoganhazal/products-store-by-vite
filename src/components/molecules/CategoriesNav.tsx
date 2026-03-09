/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { Flex, Container, Box, Button, Menu, Portal } from '@chakra-ui/react'


function CategoriesNav() {
    const { categories, loading } = useCategories();
    if (loading) return null;
    return (
        <nav>
            <Container>
                <Flex gap={"4"} align={"center"} justify={"space-between"}>
                    {categories.slice(0, 9).map((cat: any) => (
                          <Box key={cat.slug}>
                                <Link to={`/products/${cat.slug}`}>
                                    {cat.name}
                                </Link>
                            </Box>

                    ))}
                    <Box>
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <Button variant="outline" colorPalette={'purple'}>
                                    Other Categories
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        {categories.slice(10).map((cat: any) => (
                                            <Menu.Item key={cat.slug} asChild value={cat.title}>
                                                <Link to={`/products/${cat.slug}`}>
                                                    {cat.name}
                                                </Link>
                                            </Menu.Item>
                                        ))}
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </Box>
                </Flex>

            </Container>
        </nav>
    );
}

export default CategoriesNav