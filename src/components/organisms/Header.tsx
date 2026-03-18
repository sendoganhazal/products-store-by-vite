import HeaderNav from '../molecules/HeaderNav'
import { Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <header>
      <Box bg={"purple.50"} py={"8"}>
        <HeaderNav />
      </Box>
    </header>
  )
}

export default Header