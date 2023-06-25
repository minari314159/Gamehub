import {HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/imageurl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

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
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal' } onClick={() => onSelectGenre(genre)}
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
