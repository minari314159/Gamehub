import { useQuery } from "@chakra-ui/react";
import { GameQuery } from "../App";

import APIClient, { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatform";

const apiClient = new APIClient<Games>('/games');
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient
      .getAll ({
        params:{ 
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
      },
    })

  });

export default useGames;
