import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const EditResume = lazy(() => import("./routes/edit-resume/edit-resume"));
const NewResume = lazy(() => import("./routes/new-resume/new-resume"));

const routes: RouteProps[] = [
  {
    component: EditResume,
    path: "/resumes/:id/edit"
  },
  {
    component: NewResume,
    path: "/resumes/new"
  }
];

export default routes;
