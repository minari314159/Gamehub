import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/forest.png'
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
   <HStack padding='15px'>
    <Image src={logo} boxSize='60px'/>
    <SearchInput />
    <ThemeSwitch />
   </HStack>
  )
}

export default NavBar