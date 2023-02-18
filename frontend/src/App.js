import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ChatBot from "./components/ChatBot";
import {
  User,
  UserLogin,
  UserRegister,
  UserVerification,
  UserProfile,
  UserPersonal,
  UserAllergies,
  UserIllnesses,
  UserHistory,
  UserVaccinations,
  UserSurgeries,
  UserInsurance,
  UserEmergency,
  UserDashboard,
  UserData,
  UserEdit,
  UserHospitals,
  UserReports,
  UserInsights,
  UserSOS,
  UserServices,
  UserConsult,
  UserHelp,
  UserEducation,
  UserFacilities,
  UserPrograms,
  UserSchemes,
  UserSubsidies,
} from "./user/exports";
import {
  Ministry,
  MinistryLogin,
  MinistryDashboard,
  MinistryServices
} from "./ministry/exports";
import {
  Help,
  HelpLogin,
  HelpRegister,
  HelpDashboard,
} from "./portals/help/exports";
import {
  Officer,
  OfficerLogin,
  OfficerRegister,
  OfficerDashboard,
} from "./portals/officer/exports";
import {
  Doctor,
  DoctorLogin,
  DoctorRegister,
  DoctorDashboard,
} from "./portals/doctor/exports";
import {
  Hospital,
  HospitalLogin,
  HospitalRegister,
  HospitalDashboard,
} from "./portals/hospital/exports";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/user/login",
      element: <UserLogin />,
    },
    {
      path: "/user/register",
      element: <UserRegister />,
    },
    {
      path: "/user/verification/:phone/:type",
      element: <UserVerification />,
    },
    {
      path: "/user/chatbot",
      element: <ChatBot />,
    },
    {
      path: "/user/profile",
      element: <UserProfile />,
    },
    {
      path: "/user/profile/personal",
      element: <UserPersonal />,
    },
    {
      path: "/user/profile/allergies",
      element: <UserAllergies />,
    },
    {
      path: "/user/profile/illnesses",
      element: <UserIllnesses />,
    },
    {
      path: "/user/profile/history",
      element: <UserHistory />,
    },
    {
      path: "/user/profile/vaccination",
      element: <UserVaccinations />,
    },
    {
      path: "/user/profile/surgeries",
      element: <UserSurgeries />,
    },
    {
      path: "/user/profile/insurance",
      element: <UserInsurance />,
    },
    {
      path: "/user/profile/emergency",
      element: <UserEmergency />,
    },
    {
      path: "/user/dashboard",
      element: <UserDashboard />,
    },
    {
      path: "/user/dashboard/data",
      element: <UserData />,
    },
    {
      path: "/user/dashboard/edit",
      element: <UserEdit />,
    },
    {
      path: "/user/dashboard/hospitals",
      element: <UserHospitals />,
    },
    {
      path: "/user/dashboard/reports",
      element: <UserReports />,
    },
    {
      path: "/user/dashboard/insights",
      element: <UserInsights />,
    },
    {
      path: "/user/dashboard/sos",
      element: <UserSOS />,
    },
    {
      path: "/user/services",
      element: <UserServices />,
    },
    {
      path: "/user/services/consult",
      element: <UserConsult />,
    },
    {
      path: "/user/services/help",
      element: <UserHelp />,
    },
    {
      path: "/user/services/education",
      element: <UserEducation />,
    },
    {
      path: "/user/services/facilities",
      element: <UserFacilities />,
    },
    {
      path: "/user/services/programs",
      element: <UserPrograms />,
    },
    {
      path: "/user/services/consult/schemes",
      element: <UserSchemes />,
    },
    {
      path: "/user/services/subsidies",
      element: <UserSubsidies />,
    },
    {
      path: "/ministry",
      element: <Ministry />,
    },
    {
      path: "/ministry/login",
      element: <MinistryLogin />,
    },
    {
      path: "/ministry/dashboard",
      element: <MinistryDashboard />,
    },
    {
      path: "/ministry/services",
      element: <MinistryServices />,
    },
    {
      path: "/portal/help",
      element: <Help />,
    },
    {
      path: "/portal/help/login",
      element: <HelpLogin />,
    },
    {
      path: "/portal/help/register",
      element: <HelpRegister />,
    },
    {
      path: "/portal/help/dashboard",
      element: <HelpDashboard />,
    },
    {
      path: "/portal/officer",
      element: <Officer />,
    },
    {
      path: "/portal/officer/login",
      element: <OfficerLogin />,
    },
    {
      path: "/portal/officer/register",
      element: <OfficerRegister />,
    },
    {
      path: "/portal/officer/dashboard",
      element: <OfficerDashboard />,
    },
    {
      path: "/portal/doctor",
      element: <Doctor />,
    },
    {
      path: "/portal/doctor/login",
      element: <DoctorLogin />,
    },
    {
      path: "/portal/doctor/register",
      element: <DoctorRegister />,
    },
    {
      path: "/portal/doctor/dashboard",
      element: <DoctorDashboard />,
    },
    {
      path: "/portal/hospital",
      element: <Hospital />,
    },
    {
      path: "/portal/hospital/login",
      element: <HospitalLogin />,
    },
    {
      path: "/portal/hospital/register",
      element: <HospitalRegister />,
    },
    {
      path: "/portal/hospital/dashboard",
      element: <HospitalDashboard />,
    },  
  ]);
  return <RouterProvider router={router} />;
}

export default App;