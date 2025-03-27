import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommandModel } from "@shared/types";
import { apiGetCommandInfo } from "@entities/api";
import { scrollToContent } from "./helpers";

export const useCommandById = () => {
  const { id } = useParams();

  const [command, setCommand] = useState<CommandModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  const refresh = async () => {
    setIsLoading(true);
    setIsError(false);

    if (!id) {
      handleError();
      return;
    }

    apiGetCommandInfo(id)
      .then((response) => {
        setCommand(response.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(handleError);
  };

  useEffect(() => {
    scrollToContent();
    refresh().finally();
  }, []);

  return {
    isLoading,
    isError,
    command,
    refresh,
  };
};
