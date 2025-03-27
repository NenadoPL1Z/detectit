import { detectivesInfo } from "@shared/mock/detectives-info";

export const getImgByPoints = (rank: string) => {
  const findDetective = Object.values(detectivesInfo).find(
    (detective) => detective.rank.trim().toLowerCase() === rank.trim().toLowerCase(),
  );

  if (findDetective) return findDetective.image;
  return detectivesInfo.trainee.image;
};
