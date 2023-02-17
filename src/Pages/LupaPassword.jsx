import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LupaPassword = () => {
    return (
        <div className="w-full h-screen relative bg-no-repeat bg-cover bg-center">
            <div className="absolute sm:flex hidden bg-gradient-to-b from-blue-500 to-primary opacity-75 inset-0 z-0"></div>
            <div className="flex items-center justify-center gap-x-4 sm:px-24 px-4 absolute inset-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-col hidden lg:flex self-center p-10 max-w-5xl xl:max-w-2xl z-10 origin-left"
                >
                    <div className="self-start flex flex-col  text-white">
                        <img src="" className="mb-3" />
                        <h1 className="mb-3 font-bold text-4xl">
                            E Learning Universitas Bina Sarana Informatika
                        </h1>
                        <p className="pr-3">
                            lupa kata sandi Anda? masukan alamat email Anda yang
                            terdaftar pada sistem dan kami akan mengirimkan
                            email berisi tautan pengaturan ulang kata sandi atau
                            dapat dibantu KK/SO/ADM Cabang untuk mereset
                            Password anda.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center self-center z-10"
                >
                    <div className="sm:p-12 p-6 bg-white mx-auto rounded-2xl w-[25rem] ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-zinc-800">
                                Forgot password{" "}
                            </h3>
                            <p className="text-zinc-500">
                                silahkan cek spam / inbox pada email anda
                            </p>
                        </div>
                        <div className="space-y-5 mb-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-700 tracking-wide">
                                    Email
                                </label>
                                <input
                                    className=" w-full text-base px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-primary"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <p>
                                <Link
                                    to={"/"}
                                    className="text-primary text-sm hover:text-blue-400 cursor-pointer"
                                >
                                    Login?
                                </Link>
                            </p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center bg-primary hover:brightness-125 p-3 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 text-white"
                            >
                                Send
                            </button>
                        </div>
                        <div className="pt-5 text-center text-zinc-400 text-xs">
                            <span>Copyright © 2021-2022</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LupaPassword;
