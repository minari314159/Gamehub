import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";


const GameGrid = () => {
    const {data, error, isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6];

  return (
    <>
    {error && <Text>{error}</Text> }
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 4}} spacing={10} padding='15px'>
          {isLoading && skeletons.map(skeleton => <CardContainer>
            <CardSkeleton key={skeleton} />
          </CardContainer> )}
            {data.map( (game) => (<CardContainer><GameCard key={game.id} game={game}/></CardContainer> ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid