import { DetectiveModel } from "@shared/types";
import trainee from "../../../public/assets/images/detectives/trainee.png";
import constable from "../../../public/assets/images/detectives/constable.png";
import inspector from "../../../public/assets/images/detectives/inspector.png";
import sheriff from "../../../public/assets/images/detectives/sheriff.png";
import superintendent from "../../../public/assets/images/detectives/superintendent.png";
import sherlock from "../../../public/assets/images/detectives/sherlock.png";
import moriarty from "../../../public/assets/images/detectives/moriarty.png";
import agentStarling from "../../../public/assets/images/detectives/agent-starling.png";
import bonyAndClyde from "../../../public/assets/images/detectives/bony-and-clyde.png";
import leonidKanevsky from "../../../public/assets/images/detectives/leonid-kanevsky.png";
import jules from "../../../public/assets/images/detectives/jules.png";
import trueDetective from "../../../public/assets/images/detectives/true-detective.png";
import godfather from "../../../public/assets/images/detectives/godfather.png";

export const detectivesInfo: DetectiveModel[] = [
  {
    id: 1,
    rank: "Стажёр",
    points: "",
    image: trainee,
    description:
      "Ваша команда только начала свой детективный путь.Мы вам завидуем, ведь впереди столько всего интересного!",
  },
  {
    id: 2,
    rank: "Констебль",
    points: "",
    image: constable,
    description:
      "Вы начинаете чувствовать себя увереннее на месте преступления, а улики складываются в логическую цепочку!\n",
  },
  {
    id: 3,
    rank: "Инспектор",
    points: "",
    image: inspector,
    description: "Позади уже не одно раскрытое дело. С каждой серией ваша команда оттачивает свое мастерство.",
  },
  {
    id: 4,
    rank: "Шериф",
    points: "",
    image: sheriff,
    description:
      "Вам покоряются самые сложные шифры и запутанные серии преступлений. Вы начинаете видеть подсказки к Секрету практически везде. А ваша команда сияет на играх ярко, словно звезда Шерифа.",
  },
  {
    id: 5,
    rank: "Суперинтендант",
    points: "",
    image: superintendent,
    description:
      "Звание говорит само за себя. Ваша команда — супер! Вас уважаю соперники и громкие аплодисменты сопровождают вас, когда вы идете за новой медалью!",
  },
  {
    id: 6,
    rank: "Шерлок",
    points: "",
    image: sherlock,
    description:
      "Вы выбрали светлую сторону. Ваш уникальный ум создан для того, раскрывать преступления, а в чертогах разума уже огромное количество информации.",
  },
  {
    id: 7,
    rank: "Мориарти",
    points: "",
    image: moriarty,
    description: "",
  },
  {
    id: 8,
    rank: "Агент Старлинг",
    points: "",
    image: agentStarling,
    description: "Вам можно доверить дела федерального масштаба. И ягнята вас больше не беспокоят...",
  },
  {
    id: 9,
    rank: "Бонни и Клайд",
    points: "",
    image: bonyAndClyde,
    description: "",
  },
  {
    id: 10,
    rank: "Леонид Каневский",
    points: "",
    image: leonidKanevsky,
    description:
      "Вы признанные эксперты в криминалистике. Можете раскрыть преступление с одного взгляда на ковер.Впрочем, это уже совсем другая история...",
  },
  {
    id: 11,
    rank: "Джулс",
    points: "",
    image: jules,
    description: "",
  },
  {
    id: 12,
    rank: "Настоящий Детектив",
    points: "",
    image: trueDetective,
    description: "",
  },
  {
    id: 13,
    rank: "Крестный отец",
    points: "",
    image: godfather,
    description: "",
  },
];
