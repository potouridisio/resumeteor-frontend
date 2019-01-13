import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const EditResume = lazy(() => import("./routes/edit-resume/edit-resume"));

const routes: RouteProps[] = [
  {
    component: EditResume,
    path: "/resumes/:id/edit"
  }
];

export default routes;
