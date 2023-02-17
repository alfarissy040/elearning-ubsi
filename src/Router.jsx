import { createBrowserRouter } from "react-router-dom";
import MahasiswaLayout from "./Layouts/MahasiswaLayout";
import { loader as redirectLoader } from "./loader/RedirectTo";
import Login from "./Pages/Login";
import LupaPassword from "./Pages/LupaPassword";
import Dashboard from "./Pages/Mahasiswa/Dashboard";

// example
// {
//     path: "/",
//     element: <Home />,
//     // loader: rootLoader,
//     // children: [
//     //     {
//     //         path: "team",
//     //         element: <Team />,
//     //         loader: teamLoader,
//     //     },
//     // ],
// },

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/lupa-password",
        element: <LupaPassword />,
    },
    {
        path: "/user",
        element: <MahasiswaLayout />,
        children: [
            {
                index: true,
                loader: redirectLoader,
                element: <h1>403</h1>,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);
export default Router;
