import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Login from "./components/Login.tsx";
import TaskProvider from "./context/TaskProvider.tsx";
import TaskDetails from "./components/TaskDetails.tsx";

const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path:"/dashboard/:id",
                element:<TaskDetails/>
            }
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TaskProvider>
            <RouterProvider router={routerConfig} />
        </TaskProvider>
    </StrictMode>,
);
