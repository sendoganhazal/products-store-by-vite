import { Container, Flex, Text} from "@chakra-ui/react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                    <Text textStyle={"lg"} color={"purple.500"} fontWeight={"medium"}>This Project developed by <Link to="https://github.com/sendoganhazal" target="_blank" rel="noopener noreferrer">Hazal Sendogan</Link></Text>
                    <Text textStyle={"lg"} color={"cyan.500"} fontWeight={"medium"}>© 2026 Product Store. All rights reserved.</Text>
                    <Text textStyle={"lg"} color={"pink.500"} fontWeight={"medium"}>This project is built with <Link to="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</Link> & <Link to="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</Link>. Data provided by <Link to="https://dummyjson.com" target="_blank" rel="noopener noreferrer">DummyJSON</Link>.</Text>
                </Flex>
            </Container>
        </footer>
    )
}

export default Footer