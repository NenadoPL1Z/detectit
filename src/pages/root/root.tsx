import { RatingDetectives } from "./components/rating-detectives";
// import { RatingGames } from "./components/rating-games";
import { RatingAbout } from "./components/rating-about";

export const RootPage = () => {
  return (
    <>
      <RatingAbout />
      <RatingDetectives />
      {/*<RatingGames />*/}
    </>
  );
};
