import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
   <HStack padding='15px'>
    <Image src={logo} boxSize='60px'/>
    <SearchInput onSearch={onSearch}/>
    <ThemeSwitch />
   </HStack>
  )
}

export default NavBar