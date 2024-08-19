import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamModel } from "@shared/types";
import { TEAM_MOCK } from "./constants";
import { apiGetTeamInfo } from "@entities/api";
import { getHeaderHeight } from "./helpers";

export const useCommandById = () => {
  const { id } = useParams();

  const [team, setTeam] = useState<TeamModel>(TEAM_MOCK);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  const getTeamInfo = async () => {
    setIsLoading(true);
    setIsError(false);

    if (!id) {
      handleError();
      return;
    }

    apiGetTeamInfo(id)
      .then((response) => {
        setTeam(response.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(handleError);
  };

  useEffect(() => {
    window.scrollTo({ top: getHeaderHeight() });
    getTeamInfo().finally();
  }, []);

  return {
    isLoading,
    isError,
    team,
    getTeamInfo,
  };
};
