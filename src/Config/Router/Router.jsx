import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Screens/Dashboard";
import EngagementTracker from "../../Screens/EngagementTracker/index";
import Analytics from "../../Screens/Analytics";
import Integrations from "../../Screens/Integrations";
import BulkUpload from "../../Screens/BulkUpload";
import ContentLibrary from "../../Screens/ContentLibrary";
import ContentCalendar from "../../Screens/ContentCalendar";
import Login from "../../Screens/Login";
import ForgotPassword from "../../Screens/ForgotPassword";
import Signup from "../../Screens/SignUp";
import HelpSupport from "../../Screens/Help&Support";
import Profile from "../../Screens/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/integrations",
    element: <Integrations />,
  },
  {
    path: "/bulkupload",
    element: <BulkUpload />,
  },
  {
    path: "/content-library",
    element: <ContentLibrary />,
  },
  {
    path: "/calendar",
    element: <ContentCalendar />,
  },
  {
    path: "/tracker",
    element: <EngagementTracker />,
  },
  {
    path: "/helpsupport",
    element: <HelpSupport />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
