import { DetectiveModel } from "@shared/types";

const BASE_IMG_ULR = "/public/assets/images/detectives";
export const detectivesInfo: DetectiveModel[] = [
  {
    rank: "Стажёр",
    points: "",
    image: `${BASE_IMG_ULR}/trainee.png`,
    description:
      "Ваша команда только начала свой детективный путь.Мы вам завидуем, ведь впереди столько всего интересного!",
  },
  {
    rank: "Констебль",
    points: "",
    image: `${BASE_IMG_ULR}/constable.png`,
    description:
      "Вы начинаете чувствовать себя увереннее на месте преступления, а улики складываются в логическую цепочку!\n",
  },
  {
    rank: "Инспектор",
    points: "",
    image: `${BASE_IMG_ULR}/inspector.png`,
    description: "Позади уже не одно раскрытое дело. С каждой серией ваша команда оттачивает свое мастерство.",
  },
  {
    rank: "Шериф",
    points: "",
    image: `${BASE_IMG_ULR}/sheriff.png`,
    description:
      "Вам покоряются самые сложные шифры и запутанные серии преступлений. Вы начинаете видеть подсказки к Секрету практически везде. А ваша команда сияет на играх ярко, словно звезда Шерифа.",
  },
  {
    rank: "Суперинтендант",
    points: "",
    image: `${BASE_IMG_ULR}/superintendent.png`,
    description:
      "Звание говорит само за себя. Ваша команда — супер! Вас уважаю соперники и громкие аплодисменты сопровождают вас, когда вы идете за новой медалью!",
  },
  {
    rank: "Шерлок",
    points: "",
    image: `${BASE_IMG_ULR}/sherlock.png`,
    description:
      "Вы выбрали светлую сторону. Ваш уникальный ум создан для того, раскрывать преступления, а в чертогах разума уже огромное количество информации.",
  },
  {
    rank: "Мориарти",
    points: "",
    image: `${BASE_IMG_ULR}/moriarty.png`,
    description: "",
  },
  {
    rank: "Агент Старлинг",
    points: "",
    image: `${BASE_IMG_ULR}/agent-starling.png`,
    description: "Вам можно доверить дела федерального масштаба. И ягнята вас больше не беспокоят...",
  },
  {
    rank: "Бонни и Клайд",
    points: "",
    image: `${BASE_IMG_ULR}/bony-and-clyde.png`,
    description: "",
  },
  {
    rank: "Леонид Каневский",
    points: "",
    image: `${BASE_IMG_ULR}/leonid-kanevsky.png`,
    description:
      "Вы признанные эксперты в криминалистике. Можете раскрыть преступление с одного взгляда на ковер.Впрочем, это уже совсем другая история...",
  },
  {
    rank: "Джулс",
    points: "",
    image: `${BASE_IMG_ULR}/jules.png`,
    description: "",
  },
  {
    rank: "Настоящий Детектив",
    points: "",
    image: `${BASE_IMG_ULR}/true-detective.png`,
    description: "",
  },
  {
    rank: "Крестный отец",
    points: "",
    image: `${BASE_IMG_ULR}/godfather.png`,
    description: "",
  },
];
