export type GameModel = {
  id: number;
  team: string;
  total_points: number;
  total_games: number;
  first_places: number;
  second_places: number;
  third_places: number;
  rank: string;
};

export type DetectiveModel = {
  id: number;
  rank: string;
  points: string;
  image: string;
  description: string;
};
