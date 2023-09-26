import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import {ErrorPage, Subjects, Journal, Lessons, Schedule, Contacts} from '../pages';

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

  export default router;