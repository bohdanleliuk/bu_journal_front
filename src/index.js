import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./pages/error/ErrorPage";
import Subjects from "./pages/subjects/Subjects";
import Lessons from './pages/lessons/Lessons';
import Journal from './pages/journal/Journal';
import Schedule from './pages/shedule/Schedule';
import Contacts from './pages/contacts/Contacts';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'subjects',
        element: <Subjects/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'subjects/journal/:subjectId',
        element: <Journal/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'subjects/lessons/:subjectId',
        element: <Lessons/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'schedule',
        element: <Schedule/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'contacts',
        element: <Contacts/>,
        errorElement: <ErrorPage/>
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
