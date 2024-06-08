import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./css/App.css";
import auth from "./appwrite/auth.js";
import { login, logout } from "./store/authSlice";
import Loading from "./components/common/Loading";
import { Container } from "./components/container/container.jsx";
import Button from "./components/common/Button.jsx";
import Input from "./components/common/Input.jsx";


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
            <Container>
                 
            </Container>
        </>
    );
}

export default App;
