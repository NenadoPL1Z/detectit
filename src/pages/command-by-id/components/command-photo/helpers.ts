import { detectivesInfo } from "@shared/mock/detectives-info";

export const getImgByPoints = (rank: string) => {
  return (
    Object.values(detectivesInfo).filter(
      (detective) => detective.rank.trim().toLowerCase() === rank.trim().toLowerCase(),
    )[0]?.image ?? detectivesInfo.trainee.image
  );
};
