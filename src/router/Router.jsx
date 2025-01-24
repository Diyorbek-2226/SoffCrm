import { lazy } from "react";
import Layout from "../layout/Layout";

const Analitika = lazy(() => import("../pages/analitika/Analitika"));
const Settings = lazy(() => import("../pages/setings/Setings"));

const routes = [
  {
    id: 1,
    path: "/",
    element: <Layout />,
    children: [
      {
        id: 2,
        path: "/analitic",
        element: <Analitika />,
      },
      {
        id: 3,
        path: "/setings",
        element: <Settings/>,
      },
    ],
  },
];

export default routes;
