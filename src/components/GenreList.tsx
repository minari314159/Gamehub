import {HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/imageurl";
import useGameQueryStore from "../store";



const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;

  if(isLoading) return <Spinner />; //replace with seleton//

  return (
    <>
    <Heading fontSize='2xl' marginBottom={5} marginTop={2}>Genres</Heading>
    <List>
      {data?.results.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal' } onClick={() => setSelectedGenreId(genre.id)}
              fontSize='lg' 
              variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
    </>
  );
};

export default GenreList;
