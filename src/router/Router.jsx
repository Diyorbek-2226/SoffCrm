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
const GroupRoom = lazy(() => import("../pages/groups/GroupRoom"));
const GroupList = lazy(() => import("../pages/groups/GroupList"));
const Schedule = lazy(() => import("../pages/timetable/Timetable"));
const StudentCard = lazy(() => import("../Components/StudentCard/Attendance"));
const StudentList = lazy(() => import("../Components/StudentCard/ArchivedList"));
const ActiveStudent = lazy(() => import("../Components/StudentCard/ActiveStudent"));
const ArchivedList =lazy(()=> import("../Components/StudentCard/ArchivedList"));
const ParentList =lazy(()=> import("../Components/StudentCard/ParentList"));
const OrderList =lazy(()=> import("../Components/OrderDetails/OrderList"));
const FirstLesson =lazy(()=> import("../Components/OrderDetails/FirstLesson"));
const NewStudents=lazy(()=> import("../Components/OrderDetails/NewStudents"));
const OrderInformation =lazy(()=> import("../Components/OrderDetails/OrderInformation"));
const Manager = lazy(() => import("../pages/setings/manager/Manager"));
const Tulovlar = lazy(() => import("../pages/setings/manager/Tulovlar"));
const Darajalar = lazy(() => import("../pages/setings/manager/Darajalar"));
const Talaba = lazy(() => import("../pages/setings/talabalar/Talaba"));
const Tulov = lazy(() => import("../pages/setings/talabalar/Tulov"));
const Kategoriya = lazy(() => import("../pages/setings/talabalar/Kategoriya"));
const Cours = lazy(() => import("../Components/Cours/cours"));
const CoursTable = lazy(() => import("../Components/Cours/CoursTable"));
const CourseList = lazy(() => import("../Components/Cours/CourseList"));
const RolesTable = lazy(() => import("../Components/Rols/RolesTable"));
const EmployeesTable = lazy(() => import("../Components/Rols/EmployeesTable"));
const Teacher = lazy(() => import("../pages/setings/teacher/Teacher"));
const Kpi = lazy(() => import("../pages/setings/teacher/Kpi"));
const Oylik = lazy(() => import("../pages/setings/teacher/Oylik"));
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
        element: <GroupRoom/>,
      },
      {
        id: 12,
        path: "dars/jadval",
        element: <GroupList/>,
      },
      {
        id: 13,
        path: "dars",
        element: <Schedule/>,
      },
      {
        id: 14,
        path: "davomat",
        element: <StudentCard/>,
      },
      {
        id: 15,
        path: "jadval",
        element: <StudentList/>,
      },
      {
        id: 16,
        path: "aktiv",
        element: <ActiveStudent/>,
      },
      {
        id: 17,
        path: "arxiv",
        element: <ArchivedList/>,
      },
      {
        id: 18,
        path: "ota-ona",
        element: <ParentList/>,
      },
      {
        id: 19,
        path: "buyurtma",
        element: <OrderList/>,
      },
      {
        id: 20,
        path: "birinchi/darsga",
        element: <FirstLesson/>,
      },
      {
        id: 21,
        path: "buyurtma/ro'yxati",
        element: <OrderInformation/>,
      },
      {
        id: 22,
        path: "Yangi/talabalar",
        element: <NewStudents/>,
      },
      {
        id: 23,
        path: "manager",
        element: <Manager />,
      },
      {
        id: 24,
        path: "manager/tulovlar",
        element: <Tulovlar />
      },
      {
        id: 25,
        path: "manager/darajalar",
        element: <Darajalar />
      },
      {
        id: 26,
        path: "talabalar",
        element: <Talaba />
      },
      {
        id: 27,
        path: "talabalar/tulovlar",
        element: <Tulov />
      },
      {
        id: 28,
        path: "talabalar/kategoriya",
        element: <Kategoriya />
      },
      {
        id: 29,
        path: "kurs",
        element: <Cours/>
      },
      {
        id: 30,
        path: "kurs/ro'yxati",
        element: <CoursTable/>
      },
      {
        id: 31,
        path: "kurslar/ro'yxati",
        element: <CourseList/>
      },
      {
        id: 32,
        path: "ro'llar",
        element: <RolesTable/>
      },
      {
        id: 33,
        path: "hodimlar",
        element: <EmployeesTable/>
      },
      {
        id: 34,
        path: "teacher",
        element: <Teacher/>
      },
      {
        id: 35,
        path: "teacher/kpi",
        element: <Kpi/>
      },
      {
        id: 36,
        path: "teacher/oylik",
        element: <Oylik/>
      }
    ],
  },
];

export default routes;