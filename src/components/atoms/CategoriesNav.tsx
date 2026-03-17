/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from "react-router-dom";
import { useCategories } from "../../lib/hooks/useCategories";
import {  Box, Button, Menu, Portal } from '@chakra-ui/react'


function CategoriesNav() {
    const { categories, loading } = useCategories();
    if (loading) return null;
    return (
                 <Box>
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <Button variant="outline" colorPalette={'purple'}>
                                    All Categories
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
    );
}

export default CategoriesNav