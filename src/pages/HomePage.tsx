import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"


const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`, //1024px
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
  >
    <Show above="lg">
      <GridItem area="aside" paddingX={6}>
        <GenreList/>
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={4}>
      <GameHeading />
      <Flex gap={5} marginBottom={5}>
        <PlatformSelector/>
        <SortSelector/>
      </Flex>
      </Box>
      <GameGrid/>
    </GridItem>
  </Grid>
  )
}

export default HomePage