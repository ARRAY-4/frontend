import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BeforeLogin from "./before.login";

function Navbar({setIsLogin, findJob}) {
    const [login, setLogin] = useState(false)
    useEffect(() => {

        if (localStorage.getItem('@userLogin')) {
            setLogin(true)
        } else {
            setLogin(false)
            navigate("/")   
        }
    }, [])

    const navigate = useNavigate();
    const [dropDown, setDropDown] = useState(false);
    const ShowLogout = () => (
        <form
            className="flex flex-col absolute bg-white w-[150px] right-[90px] p-3 top-[80px] z-20 shadow-lg">
            <button
                onClick={() => navigate("/user-edit")}
                className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">
                Profile
            </button>
            <button
                className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">
                Setting
            </button>
            <button
                onClick={() => {
                    localStorage.removeItem("@userLogin");
                    setIsLogin(false);
                }}
                type="submit"
                className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">
                Logout
            </button>
        </form>
    );
    return (
        <div
            className="hidden md:w-full md:flex md:justify-center md:h-[100px] bg-white">
            <div className="flex justify-cente w-full container relative">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <img
                            onClick={() => navigate("/")}
                            className="w-[127px] h-[35px]"
                            src={require("src/assets/logo-powerland.webp")}
                            alt="logo-peworld"/>
                    </div>
                    {/* {login ?null : findJob } */}
                    {findJob }
                    {
                        login
                            ? <div className="flex">
                                    <img
                                        className="w-[24px] h-[24px] mr-5"
                                        src={require("src/assets/bell-icon.png")}
                                        alt="logo-peworld"/>
                                    <img
                                        onClick={() => navigate("/chat")}
                                        className="w-[24px] h-[24px] mr-5"
                                        src={require("src/assets/mail-icon.png")}
                                        alt="logo-peworld"/>
                                    <img
                                        onClick={() => setDropDown(!dropDown)}
                                        className="w-[32px] h-[32px] rounded-full"
                                        src={require("src/assets/christian-buehner-DItYlc26zVI-unsplash 1.png")}
                                        alt="logo-peworld"/>
                                </div>
                            : <BeforeLogin/>
                    }
                    {
                        dropDown
                            ? <ShowLogout/>
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
