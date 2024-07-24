import { RatingSwiper } from "./comonents/rating-swiper";
import { RatingGames } from "./comonents/rating-games";
import { RatingAbout } from "./comonents/rating-about";

export const RootPage = () => {
  return (
    <>
      <RatingAbout />
      <RatingSwiper />
      <RatingGames />
    </>
  );
};
