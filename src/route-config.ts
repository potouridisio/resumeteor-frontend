import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const EditResume = lazy(() => import("./routes/edit-resume/edit-resume"));
const NewResume = lazy(() => import("./routes/new-resume/new-resume"));
const Resume = lazy(() => import("./routes/resume/resume"));
const Resumes = lazy(() => import("./routes/resumes/resumes"));

const routes: RouteProps[] = [
  {
    component: EditResume,
    path: "/resumes/:id/edit"
  },
  {
    component: NewResume,
    path: "/resumes/new"
  },
  {
    component: Resume,
    path: "/resumes/:id"
  },
  {
    component: Resumes,
    path: "/resumes"
  }
];

export default routes;
