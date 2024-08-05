import trainee from "../../../../../public/assets/images/detectives/trainee.png";
import constable from "../../../../../public/assets/images/detectives/constable.png";
import inspector from "../../../../../public/assets/images/detectives/inspector.png";
import sheriff from "../../../../../public/assets/images/detectives/sheriff.png";
import superintendent from "../../../../../public/assets/images/detectives/superintendent.png";
import sherlock from "../../../../../public/assets/images/detectives/sherlock.png";
import moriarty from "../../../../../public/assets/images/detectives/moriarty.png";
import agentStarling from "../../../../../public/assets/images/detectives/agent-starling.png";
import bonyAndClyde from "../../../../../public/assets/images/detectives/bony-and-clyde.png";
import leonidKanevsky from "../../../../../public/assets/images/detectives/leonid-kanevsky.png";
import jules from "../../../../../public/assets/images/detectives/jules.png";
import trueDetective from "../../../../../public/assets/images/detectives/true-detective.png";
import godfather from "../../../../../public/assets/images/detectives/godfather.png";

export const getImgByPoints = (points: number) => {
  if (points > 120) return godfather;
  if (points > 110) return trueDetective;
  if (points > 100) return jules;
  if (points > 90) return leonidKanevsky;
  if (points > 80) return bonyAndClyde;
  if (points > 70) return agentStarling;
  if (points > 60) return moriarty;
  if (points > 50) return sherlock;
  if (points > 40) return superintendent;
  if (points > 30) return sheriff;
  if (points > 20) return inspector;
  if (points > 10) return constable;
  return trainee;
};
