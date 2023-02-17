import React from "react";
import { Link } from "react-router-dom";
import Seperate from "./Seperate";

const Settings = ({ handleThemeSection }) => {
    return (
        <>
            <ul className="w-full">
                <li>
                    <Link
                        to={"/user/profile"}
                        className="px-3 py-2 w-full text-black dark:text-white flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-sm"
                    >
                        Profile
                    </Link>
                </li>
                <li>
                    <button
                        className="px-3 py-2 w-full text-black dark:text-white flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-sm"
                        onClick={() => handleThemeSection(true)}
                    >
                        Theme : Dark
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 text-zinc-900 dark:text-zinc-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </li>
                <li className="py-3">
                    <Seperate />
                </li>
                <li>
                    <Link
                        to={"/user/logout"}
                        className="px-3 py-2 w-full text-black dark:text-white flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-sm"
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Settings;
