import React from "react";
import "../../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    Contact us at:- +91 7861948425 <br />
                    Email us at:- hemaliscoding@gmail.com <br />


                    This is just a fun project built for fun.... It dosen't aim to copy or harm anyone in any way..... If You have any queryies you can always contact me......
                </div>
            </div>
            <div className="copyright-wrapper">
                <div className="copyright">
                    CopyRight ©️ {new Date().getFullYear()} PostIt
                </div>
            </div>
        </footer>
    );
};

export default Footer;
