import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home";

import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Users from "../Pages/Users";
import Products from "../Componants/HOME/Products";

import Signin from "../Pages/Signin";
// import Handpainted from "./../Pages/Handpainted";
// import Kids from "./../Pages/Kids";
// import Adult from "./../Pages/Adult";
// import Gallery from "./../Pages/Gallery";
// import BagsDetails from "./../Pages/BagsDetails";

import DashBoardSideNavbar from "../Shared/Navbar/DashBoardSideNavebar";
import AllUserTable from "../DashBoard/AllUserTable";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import AddProduct from "../DashBoard/AddProduct";
import EditProducts from "../DashBoard/EditProducts";
import AllProducts from "../DashBoard/AllProducts";

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

  {
    path: "dashboard1",
    element: <DashBoardSideNavbar></DashBoardSideNavbar>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoutes>
            <AllUserTable></AllUserTable>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/all-products",
        element: (
          <PrivateRoutes>
            <AllProducts></AllProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/add-products",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/all-products",
        // /edit/:id
        element: (
          <PrivateRoutes>
            <EditProducts></EditProducts>
          </PrivateRoutes>
        ),

        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/bags/${params.id}`),
      },
    ],
  },
]);
export default router;
