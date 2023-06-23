import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

export interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6];

  return (
    <>
    {error && <Text>{error}</Text> }
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 4}} spacing={5} padding='15px'>
          {isLoading && skeletons.map(skeleton => <CardContainer key={skeleton}>
            <CardSkeleton />
          </CardContainer> )}
            {data.map( (game) => (<CardContainer key={game.id}><GameCard game={game}/></CardContainer> ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid