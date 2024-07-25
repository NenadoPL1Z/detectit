export type GameModel = {
  team: string;
  total_points: number;
  total_games: number;
  first_places: number;
  second_places: number;
  third_places: number;
  rank: string;
};

export type DetectiveModel = {
  rank: string;
  points: number;
  image: string;
  description: string;
};
