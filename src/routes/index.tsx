import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
