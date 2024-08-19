export type GameModel = {
  readonly team: string;
  readonly total_points: number;
  readonly total_games: number;
  readonly first_places: number;
  readonly second_places: number;
  readonly third_places: number;
  readonly rank: string;
};

export type TeamModel = {
  readonly team: string;
  readonly total_games: number;
  readonly rank: string;
  readonly correct_answers_percentage: number;
  readonly secrets_taken: number;
  readonly prize_places: number;
};

export type DetectiveModel = {
  id: number;
  rank: string;
  points: number;
  image: string;
  description: string;
};
