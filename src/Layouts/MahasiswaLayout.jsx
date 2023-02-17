import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Mahasiswa/Header";
import Aside from "../Components/Mahasiswa/Aside";

const MahasiswaLayout = () => {
    const [isAsideToggle, setIsAsideToggle] = useState(false);
    return (
        <div className="w-full">
            <Header handleBurger={() => setIsAsideToggle(!isAsideToggle)} />
            <div className="flex h-full">
                <motion.div
                    className="overflow-clip"
                    initial={{ width: "20rem" }}
                    animate={
                        isAsideToggle ? { width: "0rem" } : { width: "20rem" }
                    }
                    transition={{
                        type: "tween",
                    }}
                >
                    <Aside />
                </motion.div>
                <div className="w-full h-screen bg-light dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MahasiswaLayout;
