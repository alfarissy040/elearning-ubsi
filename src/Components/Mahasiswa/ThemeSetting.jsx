import React from "react";
import Seperate from "./Seperate";

const ThemeSetting = ({ handleBack }) => {
    return (
        <div className="w-full text-zinc-900 dark:text-zinc-100">
            <div className="flex items-center gap-x-3">
                <button onClick={() => handleBack(false)}>
                    <LeftArrow />
                </button>
                <h3 className="text-lg">Theme</h3>
            </div>
            <ul>
                <li className="py-2">
                    <Seperate />
                </li>
                <li>
                    <button className="px-3 py-2 w-full text-black dark:text-white flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-sm">
                        System
                        <Check />
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 w-full text-black dark:text-white flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-sm">
                        Dark
                        {/* <Check /> */}
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 w-full text-black dark:text-white flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-sm">
                        Light
                        {/* <Check /> */}
                    </button>
                </li>
            </ul>
        </div>
    );
};

const LeftArrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-zinc-900 dark:text-zinc-100"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
    </svg>
);

const Check = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-zinc-900 dark:text-zinc-100"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
        />
    </svg>
);

export default ThemeSetting;
