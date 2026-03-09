import { Button, Menu, Portal } from "@chakra-ui/react"


const LoginMenu = () => {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" colorPalette={"teal"}>
                    Login or Sign up
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {links.map((link) => (
                            <Menu.Item key={link.href} asChild value={link.title}>
                                <a href={link.href} target="_blank" rel="noreferrer">
                                    {link.title}
                                </a>
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

const links = [
    {
        title: "Login",
        href: "#",
    },
    {
        title: "Sign Up",
        href: "#",
    }
]

export default LoginMenu