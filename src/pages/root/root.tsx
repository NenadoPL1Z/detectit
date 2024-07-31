import { RatingDetectives } from "./components/rating-detectives";
import { RatingAbout } from "./components/rating-about";
import { RatingGames } from "./components/rating-games";

export const RootPage = () => {
  return (
    <>
      <RatingAbout />
      <RatingDetectives />
      <RatingGames />
    </>
  );
};
