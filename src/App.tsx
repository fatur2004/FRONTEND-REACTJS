import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import './App.css';
import Layout from "./layout";
import Dashboard from "./pages/dashboard";


const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },

    ],
  },
]);

export default function App() {
  return (
    // Jsx - Bable
    <RouterProvider router={routers}></RouterProvider>
  );
}
