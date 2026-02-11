import { Flex, Container, Box } from '@chakra-ui/react'
import LoginMenu from '../atoms/LoginMenu'
import Searchbox from '../atoms/Searchbox'

const HeaderNav = () => {
    return (
        <nav>
            <Container>
                <Flex gap={"4"} align={"center"} justify={"space-between"}>
                    <Box>Logo</Box>
                    <Box flexGrow={"0.5"}>
                        <Searchbox/>
                    </Box>
                    <Box>
                        <LoginMenu/>
                    </Box>
                    <Box>
                        Sepet
                    </Box>
                </Flex>
            </Container>
        </nav>

    )
}

export default HeaderNav