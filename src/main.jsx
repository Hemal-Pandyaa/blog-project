import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AuthLayout } from "./components/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    Home,
    Login,
    Signup,
    AllPosts,
    AddPost,
    EditPost,
    Post,
} from "./pages/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <
            App />,
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
                element: (
                    <AuthLayout authenticationRequired={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authenticationRequired={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authenticationRequired>
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authenticationRequired>
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/editPost/:slug",
                element: (
                    <AuthLayout authenticationRequired>
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store} >
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
