
export default function Footer() {
    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="inline-flex items-center">
                    {/* <img src={Logo} alt="" className="max-w-16 max-h-10" /> */}
                    <div className="ml-2 text-2xl font-semibold block uppercase text-slate-300 group-hover:text-white">
                        {" "}
                        FakeimgAI <span className="text-sm ml-2">beta</span>
                    </div>
                </div>

                <div className="flex justify-center items-center md:justify-start gap-6">
                    <div className="flex flex-col gap-2 h-40">
                        <h4 className="text-xl font-bold text-slate-300 hover:text-white">Links</h4>
                        <ul className="flex flex-col justify-center items-center space-y-2">
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

                        </ul>
                    </div>
                    <div className="flex flex-col gap-2  h-40">
                        <h4 className="text-xl font-bold text-slate-300 hover:text-white">Social</h4>
                        <ul className="flex flex-col justify-center items-center space-y-2">
                            <li className="group">
                                <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                    Discord
                                </a>
                                <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                            </li>
                            <li className="group">
                                <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                    Telegram
                                </a>
                                <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                            </li>
                            <li className="group">
                                <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                    Twitter
                                </a>
                                <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                            </li>

                        </ul>
                    </div>
                    <div className="flex flex-col gap-2  h-40">
                        <h4 className="text-xl font-bold text-slate-300 hover:text-white">Resources</h4>
                        <ul className="flex flex-col justify-center items-center space-y-2">
                            <li className="group">
                                <a href="" className="font-medium text-base text-slate-300 group-hover:text-white transition duration-150 ease-in-out group-hover:duration-300 group-hover:delay-75">
                                    Docs
                                </a>
                                <span className="block w-0 h-0.5 bg-white group-hover:w-full group-hover:bg-white transition-all duration-300 ease-in-out"></span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
