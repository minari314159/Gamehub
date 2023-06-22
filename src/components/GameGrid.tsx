import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";


const GameGrid = () => {
    const {games, error, isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6];

  return (
    <>
    {error && <Text>{error}</Text> }
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl: 4}} spacing={10} padding='15px'>
          {isLoading && skeletons.map(skeleton => <CardSkeleton key={skeleton} /> )}
            {games.map( (game) => (<GameCard key={game.id} game={game}/> ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid