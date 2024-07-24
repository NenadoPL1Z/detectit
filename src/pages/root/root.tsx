import { RatingSwiper } from "./comonents/rating-swiper";
import { RatingList } from "./comonents/rating-list";
import { RatingAbout } from "./comonents/rating-about";

export const RootPage = () => {
  return (
    <>
      <RatingAbout />
      <RatingSwiper />
      <RatingList />
    </>
  );
};
