import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// import DashBoardLayout from "../Layout/DashBoardLayout";
import Home from "../Pages/Home";

import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Users from "../Pages/Users";
import Products from "../Pages/Products";

import Signin from "../Pages/Signin";
// import Handpainted from "./../Pages/Handpainted";
// import Kids from "./../Pages/Kids";
// import Adult from "./../Pages/Adult";
// import Gallery from "./../Pages/Gallery";
// import BagsDetails from "./../Pages/BagsDetails";
// import DashBoard from "./../Pages/DashBoard";

// import PrivateRoutes from "./Private/PrivateRoutes";
// import AllBags from "../Pages/AllBags";
// import AddBag from "../Pages/AddBag";
// import EditBags from "../Pages/EditBags";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:3000/bags"),
      },
      // {
      //   path: "/productsDetails",
      //   element: <BagsDetails></BagsDetails>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/bags/${params.id}`),
      // },

      {
        path: "/users",
        element: <Users></Users>,
      },

      {
        path: "/approved",
        element: <Products></Products>,
      },

      // {
      //   path: "/Kids",
      //   element: <Kids></Kids>,
      // },
      // {
      //   path: "/Adult",
      //   element: <Adult></Adult>,
      // },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },

  // {
  //   path: "dashboard",
  //   element: <DashBoardLayout></DashBoardLayout>,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "home",
  //       element: (
  //         <PrivateRoutes>
  //           <DashBoard></DashBoard>
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "dashboard/all-bags",
  //       element: (
  //         <PrivateRoutes>
  //           <AllBags></AllBags>
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "dashboard/add-bags",
  //       element: (
  //         <PrivateRoutes>
  //           <AddBag></AddBag>
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "dashboard/all-bags/edit/:id",
  //       element: (
  //         <PrivateRoutes>
  //           <EditBags></EditBags>
  //         </PrivateRoutes>
  //       ),

  //       loader: ({ params }) =>
  //         fetch(`http://localhost:3000/bags/${params.id}`),
  //     },
  //   ],
  // },
]);
export default router;
