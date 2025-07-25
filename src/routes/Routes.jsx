import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import JavascriptQuestions from "../pages/JavascriptQuestions";
import ES6Questions from "../pages/ES6Questions";
import ReactQuestions from "../pages/ReactQuestions";
import NextJSQuestions from "../pages/NextJSQuestions";
import QnA_html from "../pages/QnA_html";
import QnA_CSS from "../pages/QnA_CSS";
import QnA_NodeJS from "../pages/QnA_NodeJS";
import QnAExpressJS from "../pages/QnAExpressJS";
import QnAMongoDB from "../pages/QnAMongoDB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/html",
        element: <QnA_html />,
      },
      {
        path: "/css",
        element: <QnA_CSS />,
      },
      {
        path: "/js-question",
        element: <JavascriptQuestions />,
      },
      {
        path: "/es6-question",
        element: <ES6Questions />,
      },
      {
        path: "/react-question",
        element: <ReactQuestions />,
      },
      {
        path: "/node-question",
        element: <QnA_NodeJS />,
      },
      {
        path: "/express-question",
        element: <QnAExpressJS />,
      },
      {
        path: "/mongo-question",
        element: <QnAMongoDB />,
      },
      {
        path: "/next-question",
        element: <NextJSQuestions />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default router;
