import { CardBody, Image, Heading, HStack, Card } from "@chakra-ui/react";
import { Games } from "../Hooks/useGames";
import Platform_Icon from "./Platform_Icon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageurl";
import Emoji from "./Emoji";


interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl (game.background_image)} />
      <CardBody justifyContent="space-between">

        <HStack justifyContent="space-between" marginBottom={3}>
          <Platform_Icon platforms={game.parent_platforms.map((p) => p.platform)}/>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
