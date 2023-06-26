import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
   <HStack padding='15px'>
    <Link to='/'>
     <Image src={logo} boxSize='60px' objectFit='cover'/>
    </Link>
    <SearchInput/>
    <ThemeSwitch />
   </HStack>
  )
}

export default NavBar