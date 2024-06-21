import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import Logo from "../common/Logo";
import { Button, LogoutBtn } from ".././";
import "../../css/header.css";

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();

    const openSidePanel = () => {
        setHidden(!hidden);
    };

    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
      },
      {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
      },
      {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
      },
      {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
      },
      ]
    return (
        <>
            <div className="fake"></div>
            <div className="nav-wrapper bg-gray-500 border-b-2 border-gray-700 z-50">
                <nav className="header bg-gray-500">
                    <Link to="/">
                        <Logo width="100px" />
                    </Link>
                    <div className="navigation">
                        <ul>
                            {navItems.map(
                                (item) =>
                                    item.active ? (
                                        <li
                                            key={item.name}
                                            onClick={() => navigate(item.slug)}
                                        >
                                            <Button type={"button"}>
                                                {item.name}
                                            </Button>
                                        </li>
                                    ) : ""
                            )}
                            {authStatus ? (
                                <li>
                                    {" "}
                                    
                                        <LogoutBtn type="button"
                                            > Log Out </LogoutBtn>
                                    {" "}
                                </li>
                            ) : (
                                ""
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
                                                    type="button"
                                                    bgColor="transparent"
                                                    borderColor="transparent"
                                                    fontSize="42px"
                                                >
                                                    {item.name}
                                                </Button>
                                            </li>
                                        )
                                )}

                                <li>
                                    {authStatus ? (
                                            <LogoutBtn 
                                            type="button"
                                            bgColor="transparent"
                                            borderColor="transparent"
                                            fontSize="42px"
                                            >

                                            Log Out
                                            </LogoutBtn>
                                    ) : (
                                        ""
                                    )}
                                </li>
                            </ul>
                        </aside>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
