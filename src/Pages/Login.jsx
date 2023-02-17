import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-full h-screen relative bg-no-repeat bg-cover bg-center">
            <div className="sm:absolute bg-gradient-to-b from-blue-500 to-primary opacity-75 inset-0 z-0"></div>
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
                            Manage all your e-Learning accounts in one place
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center self-center z-10 transition-all"
                >
                    <div className="sm:p-12 p-6 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-zinc-800">
                                Sign In{" "}
                            </h3>
                            <p className="text-zinc-500">
                                Please sign in to your account.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-700 tracking-wide">
                                    NIM or NIP
                                </label>
                                <input
                                    className=" w-full text-base px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-primary"
                                    type="number"
                                    placeholder="Enter NIM or NIP"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-zinc-700 tracking-wide">
                                    Password
                                </label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-primary"
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"
                                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                    />
                                    <label
                                        for="remember_me"
                                        className="ml-2 block text-sm text-zinc-800"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link
                                        to={"/lupa-password"}
                                        className="text-primary hover:text-blue-400 cursor-pointer"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center bg-primary hover:brightness-125 p-3 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 text-white"
                                >
                                    Sign in
                                </button>
                            </div>
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

export default Login;
