import { Flex, Container, Image,Drawer } from '@chakra-ui/react'
// import LoginMenu from '../atoms/LoginMenu'
import { CartButton } from '../atoms/CartButton'
import ReactLogo from "../../assets/react.svg";
import ViteLogo from "../../assets/vite.svg"
import { Link } from 'react-router';
import { useCart } from '../../lib/hooks/useCart';
import DrawerPortal from './DrawerPortal';

const HeaderNav = () => {
    const { items } = useCart();
    const totalItems = items.reduce(
        (sum, item) => sum + (item.quantity ?? 0),
        0
    );

    return (
        <nav>
            <Container>
                <Flex gap={"4"} align={"center"} justify={"space-between"}>
                    <Flex gap={"2"} align={"center"} >
                        <Image alt="Products Store" src={ReactLogo} style={{ display: "block", height: "30px" }} />
                        <Image alt="Products Store" src={ViteLogo} style={{ display: "block", height: "30px" }} />
                        <Link to={"/"}>Products Store</Link>
                    </Flex>
                    <Flex gap={"2"} align={"center"} justify={"flex-end"}>
                        {/* <LoginMenu /> */}
                       <Drawer.Root size={"xl"}>
                         <CartButton totalItems={totalItems} />
                        <DrawerPortal/>
                       </Drawer.Root>
                    </Flex>

                </Flex>
            </Container>
        </nav>

    )
}

export default HeaderNav