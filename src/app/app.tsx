import "./styles/index.css";
import "./styles/app.css";
import "normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootPage, CommandByIdPage } from "../pages";
import { NavigationRoutes } from "@shared/constants";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={NavigationRoutes.ROOT} element={<RootPage />} />
        <Route
          path={NavigationRoutes.COMMANDS_BY_ID}
          element={<CommandByIdPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
