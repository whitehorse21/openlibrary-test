import { FC, useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "../routes";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
