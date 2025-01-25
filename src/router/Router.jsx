import { lazy } from "react";
import Layout from "../layout/Layout";

const Analitika = lazy(() => import("../pages/analitika/Analitika"));
const Sozlamalar = lazy(() => import("../pages/setings/umumiy/Sozlamalar"));
const Check = lazy(() => import("../pages/setings/umumiy/Check"));
const Filiallar = lazy(() => import("../pages/setings/umumiy/Filiallar"));

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
        path: "sozlamalar",
        element: <Sozlamalar />,
      },
      {
        id: 4,
        path: "sozlamalar/check",
        element: <Check />,
      },
      {
        id: 5,
        path: "sozlamalar/filiallar",
        element: <Filiallar />,
      },
    ],
  },
];

export default routes;