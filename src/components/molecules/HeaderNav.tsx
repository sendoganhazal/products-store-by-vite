import { Flex, Container, Image } from '@chakra-ui/react'
import LoginMenu from '../atoms/LoginMenu'
import { CartButton } from '../atoms/CartButton'
import ReactLogo from "../../assets/react.svg";
import ViteLogo from "../../assets/vite.svg"
import { Link } from 'react-router';


const HeaderNav = () => {
    return (
        <nav>
            <Container>
                <Flex gap={"4"} align={"center"} justify={"space-between"}>
                    <Flex gap={"2"} align={"center"} >
                        <Image alt="Products Store" src={ReactLogo} style={{ display: "block", width: "30px", height: "30px" }} />
                        <Image alt="Products Store" src={ViteLogo} style={{ display: "block", width: "30px", height: "30px" }} />
                        <Link to={"/"}>Products Store</Link>
                    </Flex>
                    <Flex gap={"2"} align={"center"} justify={"flex-end"}>
                        <LoginMenu />
                        <CartButton />
                    </Flex>

                </Flex>
            </Container>
        </nav>

    )
}

export default HeaderNav