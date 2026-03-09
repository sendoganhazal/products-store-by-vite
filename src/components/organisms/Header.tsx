import React from 'react'
import HeaderNav from '../molecules/HeaderNav'
import CategoriesNav from '../molecules/CategoriesNav'
import { Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <header>
      <Box  py={"8"}>
        <HeaderNav />
      </Box>
      <Box bg={"purple.50"} py={"8"}>
        <CategoriesNav />
      </Box>
    </header>
  )
}

export default Header