import SideBar from "./components/pages/Sidebar";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/pages/Header";
import ErrorPage from "./components/pages/ErrorPage";
import Body from "./components/pages/Body";
import MainContainer from "./components/pages/MainContainer";
import SideConatiner from "./components/pages/LeftSideConatiner";
import WatchPage from "./components/pages/WatchPage";
const routerApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SideBar />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <MainContainer />,
          </>
        ),
      },
      {
        path: "/watchpage/:id",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1e272e",
        }}
      >
        <RouterProvider router={routerApp} />
      </div>
    </>
  );
}

export default App;
