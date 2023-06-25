import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatform from "../Hooks/usePlatform";
import useGenre from "../Hooks/useGenre";


interface Props {
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}: Props) => {
    const genre = useGenre(gameQuery.genreId);

    const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name || ''} 
    ${genre?.name || ''} Games`

      return (
        <Heading as='h1' fontSize='5xl' marginBottom={5} >
          {heading}
          </Heading>
      )
}

export default GameHeading