import ms from "ms";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Games>('/games');
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => apiClient
      .getAll ({
        params:{ 
          genres: gameQuery.genreId, 
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
}

export default useGames;
