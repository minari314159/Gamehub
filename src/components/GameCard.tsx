import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { Games } from "../Hooks/useGames";
import Platform_Icon from "./Platform_Icon";
import CriticScore from "./CriticScore";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody justifyContent="space-between">
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <Platform_Icon platforms={game.parent_platforms.map((p) => p.platform)}/>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
