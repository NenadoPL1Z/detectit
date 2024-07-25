import { DetectiveModel } from "@shared/types";

const BASE_IMG_ULR = "/public/assets/images/detectives";
export const detectivesInfo: DetectiveModel[] = [
  {
    rank: "Стажер",
    points: 0,
    image: `${BASE_IMG_ULR}/trainee.png`,
    description:
      "Ваша команда только начала свой детективный путь. Мы вам завидуем, ведь впереди столько всего интересного!",
  },
];
