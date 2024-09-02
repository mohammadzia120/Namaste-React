//createElement gives react element that is nothing but a js object not an html element
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";

const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "restuarants/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot((document = document.getElementById("root")));
root.render(<RouterProvider router={appRouter} />); // render converts react element(js object) to html element then put it inside DOM
