import { RatingDetectives } from "./comonents/rating-detectives";
// import { RatingGames } from "./components/rating-games";
import { RatingAbout } from "./comonents/rating-about";

export const RootPage = () => {
  return (
    <>
      <RatingAbout />
      <RatingDetectives />
      {/*<RatingGames />*/}
    </>
  );
};
