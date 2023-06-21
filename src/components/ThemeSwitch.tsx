import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react"
import darkmode from '../assets/dark.png';
import lightmode from '../assets/brightness.png';


const ThemeSwitch = () => {

const {toggleColorMode, colorMode} = useColorMode();
  return (
   <HStack >
    <Image src={lightmode} boxSize={'25px'}/>
    <Switch colorScheme='whatsapp' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    <Image src={darkmode} boxSize={'25px'}/>
   </HStack>
  )
}

export default ThemeSwitch