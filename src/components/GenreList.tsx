import { Text, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/imageurl";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)} />
              <Text fontSize='lg' >{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
