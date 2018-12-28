import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Home = lazy(() => import("./routes/home/home"));

const routes: RouteProps[] = [
  {
    component: Home,
    exact: true,
    path: "/"
  }
];

export default routes;
