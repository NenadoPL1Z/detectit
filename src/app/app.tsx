import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootPage, CommandByIdPage, NotFoundPage } from "../pages";
import { NavigationRoutes } from "@shared/constants";
import { MainLayout } from "./layout/main-layout";

export const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={NavigationRoutes.ROOT} element={<RootPage />} />
          <Route path={NavigationRoutes.COMMANDS_BY_ID} element={<CommandByIdPage />} />
          <Route path={NavigationRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
