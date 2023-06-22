import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react"
import { Games } from "../Hooks/useGames"
import Platform_Icon from "./Platform_Icon";

interface Props {
    game: Games;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody >
            <Heading fontSize='2xl'>{game.name}</Heading>
            <Platform_Icon platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCard