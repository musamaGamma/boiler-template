import { Navigate, useRoutes } from "react-router-dom";
// import RequireAuth from "./components/RequireAuth";
// import RequireGuest from "./components/RequireGuest";
import Home from "./pages/Home";
// import { Listen } from "./pages/Listen";
// import Search from "./pages/Search";

// layouts

//

// Page routes

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
}
