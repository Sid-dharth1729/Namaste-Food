import { LOGO_URL } from "../utlis/constant"  //importing a "name export"
import { useState } from "react";

const Header = () => {
    const [loginBtnReact, setLoginBtnRaect] = useState("Login");
    console.log("whole Header(component) render when btn text chnages");
    return (
        <div className="header">
            <div className="logo">
                <img src={ LOGO_URL }/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                    <button className="btnLogin" onClick={
                        () =>{ loginBtnReact === "Login"
                            ?setLoginBtnRaect("Logout")
                            :setLoginBtnRaect("Login")
                            }
                        }>{loginBtnReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;