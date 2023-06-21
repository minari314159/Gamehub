import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/forest.png'
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
   <HStack justifyContent='space-between'padding='15px'>
    <Image src={logo} boxSize='60px'/>
    <ThemeSwitch />
   </HStack>
  )
}

export default NavBar