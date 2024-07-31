import { RatingDetectives } from "./comonents/rating-detectives";
// import { RatingGames } from "./comonents/rating-games";
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
