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
const Schedule = lazy(() => import("../pages/timetable/Timetable"));
const StudentCard = lazy(() => import("../Components/StudentCard/Attendance"));
const StudentList = lazy(() => import("../Components/StudentCard/StudentList"));
const ActiveStudent = lazy(() => import("../Components/StudentCard/ActiveStudent"));
const ArchivedList =lazy(()=> import("../Components/StudentCard/ArchivedList"));
const ParentList =lazy(()=> import("../Components/StudentCard/ParentList"));
const OrderList =lazy(()=> import("../Components/OrderDetails/OrderList"));
const FirstLesson =lazy(()=> import("../Components/OrderDetails/FirstLesson"));
const NewStudents=lazy(()=> import("../Components/OrderDetails/NewStudents"));
const Manager = lazy(() => import("../pages/setings/manager/Manager"));
const Tulovlar = lazy(() => import("../pages/setings/manager/Tulovlar"));
const Darajalar = lazy(() => import("../pages/setings/manager/Darajalar"));
const Talaba = lazy(() => import("../pages/setings/talabalar/Talaba"));
const Tulov = lazy(() => import("../pages/setings/talabalar/Tulov"));
const Kategoriya = lazy(() => import("../pages/setings/talabalar/Kategoriya"));
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
      {
        id: 12,
        path: "dars",
        element: <Schedule/>,
      },
      {
        id: 13,
        path: "davomat",
        element: <StudentCard/>,
      },
      {
        id: 14,
        path: "jadval",
        element: <StudentList/>,
      },
      {
        id: 15,
        path: "aktiv",
        element: <ActiveStudent/>,
      },
      {
        id: 16,
        path: "arxiv",
        element: <ArchivedList/>,
      },
      {
        id: 17,
        path: "ota-ona",
        element: <ParentList/>,
      },
      {
        id: 18,
        path: "buyurtma",
        element: <OrderList/>,
      },
      {
        id: 19,
        path: "birinchi/darsga",
        element: <FirstLesson/>,
      },
      {
        id: 19,
        path: "Yangi/talabalar",
        element: <NewStudents/>,
      },
      {
        id: 20,
        path: "manager",
        element: <Manager />,
      },
      {
        id: 21,
        path: "manager/tulovlar",
        element: <Tulovlar />
      },
      {
        id: 22,
        path: "manager/darajalar",
        element: <Darajalar />
      },
      {
        id: 23,
        path: "talabalar",
        element: <Talaba />
      },
      {
        id: 24,
        path: "talabalar/tulovlar",
        element: <Tulov />
      },
      {
        id: 25,
        path: "talabalar/kategoriya",
        element: <Kategoriya />
      },
    ],
  },
];

export default routes;