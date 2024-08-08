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

export const detectivesInfo = {
  trainee: {
    id: 1,
    rank: "Стажёр",
    points: 50,
    image: trainee,
    description:
      "Ваша команда только начала свой детективный путь. Мы вам завидуем, ведь впереди столько всего интересного!",
  },
  constable: {
    id: 2,
    rank: "Констебль",
    points: 250,
    image: constable,
    description:
      "Вы начинаете чувствовать себя увереннее на месте преступления, а улики складываются в логическую цепочку!",
  },
  inspector: {
    id: 3,
    rank: "Инспектор",
    points: 750,
    image: inspector,
    description: "Позади уже не одно раскрытое дело. С каждой серией ваша команда оттачивает свое мастерство.",
  },
  sheriff: {
    id: 4,
    rank: "Шериф",
    points: 1500,
    image: sheriff,
    description:
      "Вам покоряются самые сложные шифры и запутанные серии преступлений. Вы начинаете видеть подсказки к Секрету практически везде. А ваша команда сияет на играх ярко, словно звезда Шерифа.",
  },
  superintendent: {
    id: 5,
    rank: "Суперинтендант",
    points: 2500,
    image: superintendent,
    description:
      "Звание говорит само за себя. Ваша команда — супер! Вас уважаю соперники и громкие аплодисменты сопровождают вас, когда вы идете за новой медалью!",
  },
  sherlock: {
    id: 6,
    rank: "Шерлок",
    points: 4000,
    image: sherlock,
    description:
      "Вы выбрали светлую сторону. Ваш уникальный ум создан для того, раскрывать преступления, а в чертогах разума уже огромное количество информации.",
  },
  moriarty: {
    id: 7,
    rank: "Мориарти",
    points: 4000,
    image: moriarty,
    description:
      "Кто, как ни вы, разбирается в криминальном мире. В ваших руках целая сеть знаний, позволяющая раз за разом занимать призовые места.",
  },
  agentStarling: {
    id: 8,
    rank: "Агент Старлинг",
    points: 5000,
    image: agentStarling,
    description: "Вам можно доверить дела федерального масштаба. И ягнята вас больше не беспокоят...",
  },
  bonyAndClyde: {
    id: 9,
    rank: "Бонни и Клайд",
    points: 5000,
    image: bonyAndClyde,
    description: "Погони, перестрелки... Романтика...",
  },
  leonidKanevsky: {
    id: 10,
    rank: "Леонид Каневский",
    points: 6000,
    image: leonidKanevsky,
    description:
      "Вы признанные эксперты в криминалистике. Можете раскрыть преступление с одного взгляда на ковер.Впрочем, это уже совсем другая история...",
  },
  jules: {
    id: 11,
    rank: "Джулс",
    points: 6000,
    image: jules,
    description: "Но я стараюсь. Я стараюсь изо всех сил быть пастырем...",
  },
  trueDetective: {
    id: 12,
    rank: "Настоящий Детектив",
    points: 7500,
    image: trueDetective,
    description: "True Detective - и этим все сказано! Название вашей команды - синоним успешного расследования.",
  },
  godfather: {
    id: 13,
    rank: "Крестный отец",
    points: 7500,
    image: godfather,
    description: "Ты просишь раскрыть дело, но просишь без уважения? Признанные мастера Detectit!",
  },
};

export const detectivesInfoArr = Object.values(detectivesInfo);
