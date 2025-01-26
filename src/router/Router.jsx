import { lazy } from "react";
import Layout from "../layout/Layout";

const Analitika = lazy(() => import("../pages/analitika/Analitika"));
const Sozlamalar = lazy(() => import("../pages/setings/umumiy/Sozlamalar"));
const Check = lazy(() => import("../pages/setings/umumiy/Check"));
const Filiallar = lazy(() => import("../pages/setings/umumiy/Filiallar"));
const Xabarnoma = lazy(() => import("../pages/setings/umumiy/Xabarnoma"));
const Sorovnoma = lazy(() => import("../pages/setings/umumiy/Sorovnoma"));
const RaqamniBelgilash = lazy(() => import("../pages/setings/umumiy/RaqamniBelgilash"));
const Groups = lazy(() => import("../pages/groups/Groups"));
const GroupsInfo = lazy(() => import("../pages/groups/GroupsInfo"));
const RoomSelection = lazy(() => import("../pages/rooms/RoomDetails"));
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
      {
        id: 6,
        path: "sozlamalar/xabarnomalar",
        element: <Xabarnoma />,
      },
      {
        id: 7,
        path: "sozlamalar/sorovnoma",
        element: <Sorovnoma />,
      },
      {
        id: 8,
        path: "sozlamalar/raqamnibelgilash",
        element: <RaqamniBelgilash />,
      },
      {
        id: 9,
        path: "/group",
        element: <Groups/>,
      },
      {
        id: 10,
        path: "guruh/malumotlar",
        element: <GroupsInfo/>,
      },
      {
        id: 11,
        path: "xonalar",
        element: <RoomSelection/>,
      },
    ],
  },
];

export default routes;