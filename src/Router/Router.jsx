import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";
import JobDetails from "../Components/JobDetails";
import PrivateRouter from "../Components/PrivateRouter";
import ApplyNow from "../Components/ApplyNow";
import MyApplication from "../Components/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobsDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-khaki-phi.vercel.app/jobsDetails/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/applyNow/:id",
        element: (
          <PrivateRouter>
            <ApplyNow></ApplyNow>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRouter>
            <MyApplication></MyApplication>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
