// import { Link } from "react-router-dom";
// import Logo from "../../assets/logo.png";
import { useState } from "react";
import { HiMiniBars3, HiXMark } from "react-icons/hi2";
// import { Link } from "react-router-dom";
export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
        scrollToTop();
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="max-w-6xl bg-mainbg mx-auto text-white flex justify-between items-center px-4">
            <div className="flex justify-between items-center h-16 md:h-20 py-2 w-full">
                <div className="shrink-0 mr-4">
                    <div className="inline-flex items-center">
                        {/* <img src={Logo} alt="" className="max-w-16 max-h-10" /> */}
                        <div className="ml-2 text-2xl font-semibold  block uppercase">
                            {" "}
                            FakeimgAI <span className="text-sm ml-2">beta</span>
                        </div>
                    </div>
                </div>
                <nav className=" hidden md:flex grow">
                    <ul className="flex grow justify-end flex-wrap items-center space-x-10">
                        <li className="group">
                            <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                Pricing
                            </a>
                            <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                        </li>
                        <li className="group">
                            <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                Token
                            </a>
                            <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                        </li>
                        <li className="group">

                            <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                Twitter
                            </a>
                            <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                        </li>
                        <li className="group">
                            <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                Pricing
                            </a>
                            <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                        </li>
                        <li>
                            <a href="">
                                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-origin-border text-white  w-24 h-10  rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-700/50">
                                    DAPP
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex md:hidden justify-center items-center gap-2 px-4">
                <HiMiniBars3 onClick={toggleMenu} className="text-lg font-bold" />
            </div>
            {/* Full Screen Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 right-0 bg-primarybg z-50 min-h-screen bg-mainbg lg:hidden">
                    <div className="flex justify-between py-3 px-4">
                        <button
                            className="text-xl font-extrabold bg-primarycl w-8 h-8 flex justify-center items-center text-white rounded-md"
                            onClick={closeMenu}
                        >
                            <HiXMark />
                        </button>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-4 pt-1">
                        <ul>
                            <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                                <a onClick={closeMenu}>
                                    <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                                        Pricing
                                    </p>
                                </a>
                            </li>
                            <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                                <a onClick={closeMenu}>
                                    <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                                        Token
                                    </p>
                                </a>
                            </li>
                            <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                                <a onClick={closeMenu}>
                                    <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                                        Twitter
                                    </p>
                                </a>
                            </li>
                            <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                                <a onClick={closeMenu}>
                                    <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                                        Telegram
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a onClick={closeMenu}>
                                    <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-origin-border text-white  w-24 h-10  rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-700/50">
                                        DAPP
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            )}
        </div>
    );
}
