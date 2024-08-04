import { RatingDetectives } from "./components/rating-detectives";
import { RatingAbout } from "./components/rating-about";
import { RatingGames } from "./components/rating-games";
import { useEffect } from "react";
import { debounceInstance } from "@shared/utils";
import { useScrollStore } from "@entities/store/scroll";

const debounce = debounceInstance();
export const RootPage = () => {
  const { pageYOffset, setPageYOffset } = useScrollStore();
  const onScroll = () => {
    debounce(() => {
      setPageYOffset(window.pageYOffset);
    });
  };
  useEffect(() => {
    if (pageYOffset) window.scrollTo({ top: pageYOffset });
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <RatingAbout />
      <RatingDetectives />
      <RatingGames />
    </>
  );
};
