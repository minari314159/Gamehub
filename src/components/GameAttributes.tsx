import { SimpleGrid, Text } from "@chakra-ui/react";
import { Games } from "../entities/Games"
import CriticScore from "./CriticScore";
import DefinitionElement from "./DefinitionElement";

interface Props{
    game: Games;
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefinitionElement term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionElement>
        <DefinitionElement term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionElement>
        <DefinitionElement term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionElement>
        <DefinitionElement term="Publisher">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionElement>
      </SimpleGrid>
  )
}

export default GameAttributes