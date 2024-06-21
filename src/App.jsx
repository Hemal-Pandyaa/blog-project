import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./css/App.css";
import auth from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice";
import { Container, Footer, Header, Loading } from "./components";
import { Outlet } from "react-router";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>

            {loading ? <Loading /> : ""}
            <div className="bg-gray-600">
            <Header />
                <Container>
                    <Outlet />
                </Container>
            <Footer />
            </div>
        </>
    );
}

export default App;
