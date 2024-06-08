import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Logo from "../common/Logo";
import { Button } from ".././";
import "../../css/header.css";

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const [hidden, setHidden] = useState(true);
    // const navigate = useNavigate();
    console.log(authStatus);

    const openSidePanel = () => {
        setHidden(!hidden);
    };

    const navItems = [
        {
            name: "Home",
            link: "/",
            active: true,
        },
        {
            name: "About",
            link: "/about",
            active: true,
        },
        {
            name: "myBlogs",
            link: "/myBlogs",
            active: authStatus,
        },
        {
            name: "addBlog",
            link: "/addBlog",
            active: authStatus,
        },
        {
            name: "Login",
            link: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            link: "/signup",
            active: !authStatus,
        },
    ];
    return (
        <>
            <div className="fake"></div>
            <div className="nav-wrapper">
                <nav className="header">
                    {/* <Link to="/"> */}
                    <Logo width="100px" />
                    {/* </Link> */}
                    <div className="navigation">
                        <ul>
                            {navItems.map(
                                (item) =>
                                    item.active && (
                                        <li key={item.name}
                                        //  onClick={navigate(item.link)}
                                         >
                                            <Button type={"button"}>
                                                {item.name}
                                            </Button>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                    <div className="m-navigation">
                        <img src="/menu.png" onClick={openSidePanel} />
                        <aside className={`${hidden ? "hidden" : ""} side-bar`}>
                            <img
                                src="../../../public/close.png"
                                onClick={openSidePanel}
                                className="close"
                            />
                            <ul>
                                {navItems.map(
                                    (item) =>
                                        item.active && (
                                            <li key={item.name}>
                                                <Button
                                                    type={"button"}
                                                    bgColor="transparent"
                                                    borderColor="transparent"
                                                    fontSize={"42px"}
                                                >
                                                    {item.name}
                                                </Button>
                                            </li>
                                        )
                                )}
                            </ul>
                        </aside>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
